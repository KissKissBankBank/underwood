import React, { useContext, useState, useEffect } from 'react'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { EditorState, Modifier, RichUtils } from 'draft-js'
import {
  Button,
  Title,
  Text,
  COLORS,
  ArrowContainer,
  pxToRem,
  ScreenConfig,
  ModalNext as Modal,
} from '@kisskissbankbank/kitten'
import linkifyIt from 'linkify-it'
import tlds from 'tlds'
import {
  getCurrentSelection,
  getEntity,
  getEntityKey,
  getEntityText,
  hasEntityFocus,
} from '../utils'
import ButtonEditor from '../components/button'
import { Label, InputText } from '../components/form'
import { EditorContext, updateEditor } from '../context'

const linkify = linkifyIt()
linkify.tlds(tlds)

const Wrapper = styled.div`
  position: relative;
  margin: ${pxToRem(30)} 0;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    display: inline-block;
  }
`

const ButtonLinkWithFluidStyle = styled(Button)`
  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    min-width: initial;
    width: 100%;
  }
`

const StyledArrowContainer = styled(ArrowContainer)`
  display: flex;
  position: absolute;
  min-width: max-content;
  padding: 0 ${pxToRem(20)};
  background-color: ${COLORS.background1};
  margin-top: ${pxToRem(5)};
  transition: opacity 0.1s ease-out, margin-top 0.1s ease-out;
`

const DeleteLink = styled(Text)`
  display: block;
  width: 100%;
  padding: 0;
  text-align: center;
`

const VerticalSeparator = styled.span`
  margin: ${pxToRem(5)} ${pxToRem(10)};
  border-left: ${pxToRem(2)} solid ${COLORS.font2};
`

const ShareLink = styled(Text)`
  overflow: hidden;
  display: inline-block;
  max-width: ${pxToRem(150)};
  text-overflow: ellipsis;
  white-space: nowrap;
`

const StyledButtonLink = ({ href, children }) => {
  return (
    <ButtonLinkWithFluidStyle
      tag="a"
      href={href}
      target="_blank"
      rel="nofollow noopener"
      modifier="helium"
      size="big"
      variant="orion"
    >
      {children}
    </ButtonLinkWithFluidStyle>
  )
}

const ButtonLink = ({ contentState, entityKey, children }) => {
  const [isVisible, setVisible] = useState(false)
  const { url } = contentState.getEntity(entityKey).getData()
  const [{ editorState, focus, translations }, dispatch] =
    useContext(EditorContext)
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey)

  useEffect(() => {
    setTimeout(() => setVisible(hasFocus && focus), 0)
  }, [focus, editorState])

  return (
    <Wrapper aria-live="assertive">
      <StyledButtonLink href={url}>{children}</StyledButtonLink>

      {isVisible && (
        <StyledArrowContainer
          position="top"
          shadow
          borderWidth={1}
          borderColor={COLORS.line1}
          contentEditable={false}
        >
          <DeleteLink
            href="#"
            tag="a"
            size="micro"
            weight="regular"
            color="error"
            onClick={(e) => {
              e.preventDefault()
              const currentContent = contentState.getBlockForKey(
                editorState.getSelection().getFocusKey(),
              )
              currentContent.findEntityRanges(
                (character) => {
                  return character.getEntity() === entityKey
                },
                (start, end) => {
                  const newsSelection = editorState.getSelection().merge({
                    focusOffset: end,
                    anchorOffset: start,
                  })
                  const newsEditorState = Modifier.applyEntity(
                    contentState,
                    newsSelection,
                    null,
                  )
                  dispatch(
                    updateEditor(
                      EditorState.push(
                        editorState,
                        newsEditorState,
                        'apply-entity',
                      ),
                    ),
                  )
                },
              )
            }}
          >
            {translations.link.button.delete}
          </DeleteLink>
          <VerticalSeparator />
          <ShareLink
            href={url}
            target="_blank"
            rel="noopener"
            tag="a"
            size="micro"
            weight="regular"
            color="font1"
          >
            {url}
          </ShareLink>
        </StyledArrowContainer>
      )}
    </Wrapper>
  )
}

const buttonLinkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'BUTTON_LINK'
    )
  }, callback)
}

export const decorator = {
  strategy: buttonLinkStrategy,
  component: ButtonLink,
}

export const readDecorator = {
  strategy: buttonLinkStrategy,
  component: (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData()
    return (
      <Wrapper>
        <StyledButtonLink href={url}>{props.children}</StyledButtonLink>
      </Wrapper>
    )
  },
}

const ButtonLinkControls = ({ disabled, onChange }) => {
  const [{ editorState, editorRef, translations }, dispatch] =
    useContext(EditorContext)
  const entity = getEntity(editorState)
  const entityKey = getEntityKey(editorState)
  const textToShow = () => {
    if (!entity) {
      return getCurrentSelection(editorState)
    }
    return getEntityText(editorState, entityKey)
  }

  return (
    <Modal
      variant="orion"
      headerTitle={
        <Title noMargin modifier="quaternary">
          {translations.button_link.title}
        </Title>
      }
      trigger={
        <ButtonEditor
          icon="button_link"
          className="Editor__toolbar__button--large"
          disabled={disabled}
        />
      }
    >
      {({ close }) => {
        return (
          <Formik
            enableReinitialize
            initialValues={{
              url: entity ? entity.getData().url : '',
              text: textToShow(),
            }}
            onSubmit={({ url }) => {
              onChange(url)
              const link = linkify.match(url)
              const contentState = editorState.getCurrentContent()
              if (entity) {
                const newContentState = contentState.replaceEntityData(
                  entityKey,
                  { url: link[0].url },
                )
                dispatch(
                  updateEditor(
                    EditorState.push(
                      editorState,
                      newContentState,
                      'change-block-data',
                    ),
                  ),
                )
              } else {
                const contentStateWithEntity = contentState.createEntity(
                  'BUTTON_LINK',
                  'MUTABLE',
                  { url: link[0].url },
                )
                const entityKey =
                  contentStateWithEntity.getLastCreatedEntityKey()
                const newEditorState = EditorState.set(editorState, {
                  currentContent: contentStateWithEntity,
                })

                dispatch(
                  updateEditor(
                    RichUtils.toggleLink(
                      newEditorState,
                      newEditorState.getSelection(),
                      entityKey,
                    ),
                  ),
                )
              }
              close()
              setTimeout(() => editorRef.current.blur(), 0)
            }}
          >
            {({ handleSubmit }) => {
              return (
                <>
                  <Modal.Block className="k-u-margin-bottom-quadruple">
                    <div className="k-u-margin-bottom-double">
                      <Label htmlFor="">{translations.button_link.text}</Label>
                      <InputText name="text" disabled />
                    </div>

                    <Label htmlFor="url">{translations.button_link.url}</Label>

                    <InputText
                      name="url"
                      validate={(value) => {
                        if (!linkify.test(value)) {
                          return translations.link.error
                        }
                      }}
                    />
                  </Modal.Block>

                  <Modal.Button
                    fluid
                    size="big"
                    type="button"
                    modifier="helium"
                    variant="orion"
                    onClick={handleSubmit}
                  >
                    {translations.submit}
                  </Modal.Button>
                </>
              )
            }}
          </Formik>
        )
      }}
    </Modal>
  )
}

ButtonLinkControls.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

ButtonLinkControls.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default ButtonLinkControls
