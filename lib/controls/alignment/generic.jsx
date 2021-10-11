import React, { useContext } from 'react'
import { EditorState, Modifier } from 'draft-js'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import Button from '../../components/button'
import { EditorContext, updateEditor } from '../../context'
import { getCurrentAlignmentStyle } from '../../utils'

const Generic = ({ disabled, label, onChange }) => {
  const [{ editorState, disabled: contextDisabled }, dispatch] =
    useContext(EditorContext)
  const currentAlignmentStyle =
    getCurrentAlignmentStyle(editorState) ?? 'k-u-align-left'

  return (
    <Button
      key={label}
      icon={label}
      disabled={contextDisabled || disabled}
      active={currentAlignmentStyle === label}
      onToggle={() => {
        onChange()
        const currentContent = editorState.getCurrentContent()
        const selection = editorState.getSelection()
        dispatch(
          updateEditor(
            EditorState.push(
              editorState,
              Modifier.setBlockData(
                currentContent,
                selection,
                Map({ alignmentStyle: label }),
              ),
              'change-inline-style',
            ),
          ),
        )
      }}
    />
  )
}

Generic.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Generic.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default Generic
