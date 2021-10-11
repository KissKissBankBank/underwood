import React, { useContext } from 'react'
import { RichUtils } from 'draft-js'
import PropTypes from 'prop-types'
import { EditorContext, updateEditor } from '../context'
import Button from '../components/button'

const Quote = ({ disabled, onChange }) => {
  const [{ editorState, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext)
  const currentContent = editorState.getCurrentContent()
  const selection = editorState.getSelection()
  const currentBlockType = currentContent
    .getBlockForKey(selection.getStartKey())
    .get('type')
  const active = currentBlockType === 'blockquote'

  return (
    <Button
      icon="quote"
      active={active}
      disabled={contextDisabled || disabled}
      onToggle={() => {
        onChange()
        dispatch(
          updateEditor(RichUtils.toggleBlockType(editorState, 'blockquote')),
        )
      }}
    />
  )
}

Quote.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Quote.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default Quote
