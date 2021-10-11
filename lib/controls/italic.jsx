import React, { useContext } from 'react'
import { RichUtils } from 'draft-js'
import PropTypes from 'prop-types'
import { EditorContext, updateEditor } from '../context'
import Button from '../components/button'

const Italic = ({ disabled, onChange }) => {
  const [{ editorState, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext)
  const currentStyle = editorState.getCurrentInlineStyle()
  return (
    <Button
      key="format_italic"
      active={currentStyle.has('ITALIC')}
      icon="format_italic"
      onToggle={(style) => {
        onChange()
        dispatch(updateEditor(RichUtils.toggleInlineStyle(editorState, style)))
      }}
      style="ITALIC"
      disabled={contextDisabled || disabled}
    />
  )
}

Italic.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Italic.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default Italic
