import React from 'react'
import { ResponsiveIframeContainer } from '@kisskissbankbank/kitten'

const Media = (props) => {
  const { html } = props.contentState.getEntity(props.entityKey).getData()
  return (
    <ResponsiveIframeContainer
      ratio={67.5}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

const mediaStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'MEDIA'
    )
  }, callback)
}

export default {
  strategy: mediaStrategy,
  component: Media,
}
