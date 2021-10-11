import React from 'react'

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData()
  return (
    <a
      href={url}
      className="k-u-link k-u-link-primary1"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {props.children}
    </a>
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

export default {
  strategy: linkStrategy,
  component: Link,
}
