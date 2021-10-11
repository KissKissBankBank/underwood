import React, { useContext } from 'react'
import { RichUtils } from 'draft-js'
import PropTypes from 'prop-types'
import { EditorContext, updateEditor } from '../context'
import Button from '../components/button'

const Bold = ({ disabled, onChange }) => {
  const [{ editorState, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext)
  const currentStyle = editorState.getCurrentInlineStyle()
  return (
    <Button
      key="format_bold"
      active={currentStyle.has('BOLD')}
      icon="format_bold"
      onToggle={(style) => {
        onChange()
        dispatch(updateEditor(RichUtils.toggleInlineStyle(editorState, style)))
      }}
      style="BOLD"
      disabled={contextDisabled || disabled}
    />
  )
}

Bold.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Bold.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default Bold
