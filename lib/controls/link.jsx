import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import styled from 'styled-components'
import isEmtpy from 'lodash/fp/isEmpty'
import { EditorState, Modifier, RichUtils } from 'draft-js'
import linkifyIt from 'linkify-it'
import tlds from 'tlds'
import { Title, pxToRem, ModalNext as Modal } from '@kisskissbankbank/kitten'
import ButtonEditor from '../components/button'
import { Label, InputText } from '../components/form'
import {
  getCurrentSelection,
  getEntity,
  getEntityKey,
  getEntityText,
  getImageUrl,
  hasEntityFocus,
} from '../utils'
import { EditorContext, updateEditor } from '../context'
import LinkInline from './link-inline'

const linkify = linkifyIt()
linkify.tlds(tlds)

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-height: ${pxToRem(200)};
    max-width: 100%;
  }
`

const ImageLinked = ({ src }) => {
  return (
    <ImageWrapper>
      <img src={getImageUrl(src)} alt="" />
    </ImageWrapper>
  )
}

const Link = ({ contentState, entityKey, children }) => {
  const [isVisible, setVisible] = useState(false)
  const { url } = contentState.getEntity(entityKey).getData()
  const [{ editorState, focus }, dispatch] = useContext(EditorContext)
  const hasFocus = hasEntityFocus(contentState, editorState, entityKey)
  useEffect(() => {
    setTimeout(() => setVisible(hasFocus && focus), 0)
  }, [focus, editorState])
  return (
    <Wrapper aria-live="assertive">
      <a
        href={url}
        target="_blank"
        className="k-u-link k-u-link-primary1"
        rel="nofollow noopener"
      >
        {children}
      </a>
      {isVisible && (
        <LinkInline
          url={url}
          onDelete={() => {
            const currentContent = contentState?.getBlockForKey(
              editorState?.getSelection()?.getFocusKey(),
            )
            if (!currentContent) return
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
        />
      )}
    </Wrapper>
  )
}

const linkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    )
  }, callback)
}

export const decorator = {
  strategy: linkStrategy,
  component: Link,
}

export const readDecorator = {
  strategy: linkStrategy,
  component: (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData()
    return (
      <Wrapper>
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener"
          className="k-u-link k-u-link-primary1"
        >
          {props.children}
        </a>
      </Wrapper>
    )
  },
}

const LinkControls = ({ disabled, onChange }) => {
  const [modalOpened, openModal] = useState(false)
  const [
    { editorState, editorRef, translations, disabled: contextDisabled },
    dispatch,
  ] = useContext(EditorContext)
  const entity = getEntity(editorState)
  const entityKey = getEntityKey(editorState)
  const textToShow = () => {
    if (!entity) {
      return getCurrentSelection(editorState)
    }
    return getEntityText(editorState, entityKey)
  }
  const forceFocus = () => {
    const currentSelection = editorState.getSelection()
    setTimeout(() => editorRef.current.focus(), 0)
    const newSelectionAtTheEnd = currentSelection.merge({
      anchorOffset: currentSelection.getFocusOffset(),
      hasFocus: true,
    })
    dispatch(
      updateEditor(
        EditorState.forceSelection(editorState, newSelectionAtTheEnd),
      ),
    )
  }
  const active =
    !contextDisabled && !disabled && (entity || !isEmtpy(textToShow()))
  return (
    <>
      <ButtonEditor
        icon="link"
        disabled={!active}
        onToggle={() => {
          if (modalOpened) {
            openModal(false)
          } else {
            openModal(true)
          }
        }}
      />
      <Modal
        onClose={() => {
          openModal(false)
          forceFocus()
        }}
        isOpen={modalOpened}
        variant="orion"
        headerTitle={
          <Title modifier="quaternary">{translations.link.title}</Title>
        }
      >
        {({ close }) => {
          return (
            <Modal.Block>
              <Formik
                enableReinitialize
                initialValues={{
                  url: entity ? entity.getData().url : '',
                  text: textToShow(),
                }}
                onSubmit={({ url }) => {
                  const link = linkify.match(url)
                  const contentState = editorState.getCurrentContent()
                  onChange()
                  if (entity) {
                    if (entity?.get('type') === 'IMAGE') {
                      const newImageContentState = contentState.mergeEntityData(
                        entityKey,
                        { url: link[0].url },
                      )
                      dispatch(
                        updateEditor(
                          EditorState.push(
                            editorState,
                            newImageContentState,
                            'change-block-data',
                          ),
                        ),
                      )
                    } else {
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
                    }
                  } else {
                    const contentStateWithEntity = contentState.createEntity(
                      'LINK',
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
                  openModal(false)
                  setTimeout(() => editorRef.current.focus(), 0)
                }}
              >
                {({ handleSubmit }) => {
                  return (
                    <>
                      <div className="k-u-margin-bottom-double">
                        {entity?.get('type') === 'IMAGE' ? (
                          <ImageLinked src={entity?.getData()?.src} />
                        ) : (
                          <>
                            <Label htmlFor="">
                              {translations.link.text.label}
                            </Label>
                            <InputText name="text" disabled />
                          </>
                        )}
                      </div>

                      <div className="k-u-margin-vertical-double">
                        <Label size="micro" htmlFor="url">
                          {translations.image_upload.url}
                        </Label>
                        <InputText
                          name="url"
                          variant="orion"
                          validate={(value) => {
                            if (!linkify.test(value)) {
                              return translations.link.error
                            }
                          }}
                        />
                      </div>
                      <Modal.Actions>
                        <Modal.Button
                          size="big"
                          type="button"
                          variant="orion"
                          modifier="helium"
                          onClick={handleSubmit}
                        >
                          {translations.submit}
                        </Modal.Button>
                      </Modal.Actions>
                    </>
                  )
                }}
              </Formik>
            </Modal.Block>
          )
        }}
      </Modal>
    </>
  )
}

LinkControls.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

LinkControls.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default LinkControls
