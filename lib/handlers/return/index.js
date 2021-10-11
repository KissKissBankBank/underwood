import {
  isVideoBlock,
  isImageBlock,
  getEntity,
  addBlockAfter,
  resetTypeOnSelectionAfter,
} from '../../utils'

export default (onChange) => (event, editorState) => {
  const contentState = editorState.getCurrentContent()
  const currentKey = editorState.getSelection().getAnchorKey()
  const currentBlock = contentState.getBlockForKey(currentKey)
  const currentEntity = getEntity(editorState)

  if (isVideoBlock(currentEntity) || isImageBlock(currentEntity)) {
    onChange(addBlockAfter(editorState, currentKey))
    return 'handled'
  }
  if (
    currentBlock.getText() === '' &&
    ['unordered-list-item', 'blockquote'].includes(currentBlock.getType())
  ) {
    onChange(resetTypeOnSelectionAfter(editorState))
    return 'handled'
  }
  if (['header-two', 'header-three'].includes(currentBlock.getType())) {
    onChange(addBlockAfter(editorState, currentKey))
    return 'handled'
  }
  return 'not-handled'
}
