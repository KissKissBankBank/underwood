import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { Editor, EditorState } from 'draft-js'
import { createContent } from './html-editor'
import { stateToHTML } from 'draft-js-export-html'
import { TYPOGRAPHY, pxToRem, ScreenConfig } from '@kisskissbankbank/kitten'

const TitleStyle = createGlobalStyle`
  .DraftEditor-wrapper {
      .public-DraftEditorPlaceholder-root {
        ${TYPOGRAPHY.fontStyles.bold};
        font-size: ${pxToRem(28)};
        @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
          font-size: ${pxToRem(36)};
        }
        @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
          font-size: ${pxToRem(48)};
        }
      }
  }
  .DraftEditor-editorContainer__title {
    ${TYPOGRAPHY.fontStyles.bold};
    font-size: ${pxToRem(28)};
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      font-size: ${pxToRem(36)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      font-size: ${pxToRem(48)};
    }
  }
`

const Title = ({ onFocus, onBlur, onChange, initialValue, placeholder }) => {
  const [editorState, updateEditorState] = useState(EditorState.createEmpty())
  useEffect(() => {
    updateEditorState(createContent(initialValue))
  }, [initialValue])
  return (
    <div className="DraftEditor-wrapper">
      <TitleStyle />
      <Editor
        editorState={editorState}
        onChange={(newsEditorState) => {
          updateEditorState(newsEditorState)
          onChange(
            stateToHTML(newsEditorState.getCurrentContent(), {
              defaultBlockTag: 'span',
              blockStyleFn: () => {
                return { style: { display: 'block' } }
              },
            }),
          )
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        blockStyleFn={() => {
          return 'DraftEditor-editorContainer__title'
        }}
      />
    </div>
  )
}

Title.propTypes = {
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}

Title.defaultProps = {
  initalValue: '',
  placeholder: '',
  onFocus: () => null,
  onBlur: () => null,
  onChange: () => null,
}

export default Title
