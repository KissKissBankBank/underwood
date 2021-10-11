import React, { useRef } from 'react'
import { useLazyObserver } from '@kisskissbankbank/kitten'

const Image = (props) => {
  const {
    src,
    alt,
    style,
    width,
    height,
    imageLink,
  } = props.contentState.getEntity(props.entityKey).getData()

  const lazyComponentRef = useRef(null)
  const isLazyTriggered = useLazyObserver(lazyComponentRef)

  const defaultImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>`

  const image = (
    <img
      src={isLazyTriggered ? src : defaultImage}
      alt={alt}
      width={width && height ? width : undefined}
      height={width && height ? height : undefined}
      style={{
        width: style['width'],
      }}
    />
  )

  if (imageLink) {
    return (
      <a
        href={imageLink}
        className="k-u-align-center"
        target="_blank"
        rel="nofollow noopener noreferrer"
        ref={lazyComponentRef}
      >
        {image}
      </a>
    )
  }

  return (
    <div className="k-u-align-center" ref={lazyComponentRef}>
      {image}
    </div>
  )
}

const imageStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'IMAGE'
    )
  }, callback)
}

export default {
  strategy: imageStrategy,
  component: Image,
}
