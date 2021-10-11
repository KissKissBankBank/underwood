import React from 'react'

const Separator = () => {
  return <hr />
}

const separatorStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'SEPARATOR'
    )
  }, callback)
}

export default {
  strategy: separatorStrategy,
  component: Separator,
}
