import React from 'react'
import {
  parseHtml,
  ResponsiveIframeContainer,
  LazyLoader
} from '@kisskissbankbank/kitten'

const Media = (props) => {
  const { html } = props.contentState.getEntity(props.entityKey).getData()

  return (
    <LazyLoader>
      <ResponsiveIframeContainer ratio={67.5}>
        {parseHtml(html, { sanitize: false })}
      </ResponsiveIframeContainer>
    </LazyLoader>
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
