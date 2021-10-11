import React from 'react'

const BlockQuote = (props) => {
  return props.children.length === 1 &&
    props.children[0].props.text === ' ' ? null : (
    <span>{props.children}</span>
  )
}

const blockQuoteStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'BLOCKQUOTE'
    )
  }, callback)
}

export default {
  strategy: blockQuoteStrategy,
  component: BlockQuote,
}
