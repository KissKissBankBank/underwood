import React, { useContext, useRef } from 'react'
import { isServerAllowed } from '../utils/responsive-image-handler'
import { responsiveImageAttributes } from '../utils/responsive-image-attributes'
import {
  ONE_IN_XXS_CONTAINER,
  ONE_IN_7_COLS,
  ONE_IN_XL_7_COLS,
} from '../utils/image-width-definitions'
import { useLazyObserver } from '@kisskissbankbank/kitten'
import { EditorContext } from '../context'

const IMAGE_SIZES = [280, 335, 380, 785, 944]

function getNextClosestValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= value) {
      return array[i]
    }
  }
}

const Image = (props) => {
  const [{ configResponsiveImageHandler }] = useContext(EditorContext)
  const { src, alt, style, width, height, imageLink } = props.contentState
    .getEntity(props.entityKey)
    .getData()
  const lazyComponentRef = useRef(null)
  const isLazyTriggered = useLazyObserver(lazyComponentRef)

  const defaultImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><path fill='%23caf4fe' d='M0 0h400v300H0z'/></svg>`

  let responsiveImage = {
    src,
    sizes: null,
    srcSet: null,
  }

  if (isServerAllowed(src, configResponsiveImageHandler)) {
    responsiveImage =
      style.width && style.height
        ? responsiveImageAttributes(src, {
            imageSizes: [
              getNextClosestValue(IMAGE_SIZES, parseInt(style.width)),
            ],
            breakpoints: [0],
            imageSizesInViewport: [parseInt(style.width)],
            upscale: false,
            resolutions: 1,
            config: configResponsiveImageHandler,
          })
        : responsiveImageAttributes(src, {
            imageSizes: IMAGE_SIZES,
            breakpoints: [0, 1080, 1440],
            imageSizesInViewport: [
              ONE_IN_XXS_CONTAINER,
              ONE_IN_7_COLS,
              ONE_IN_XL_7_COLS,
            ],
            upscale: false,
            config: configResponsiveImageHandler,
          })
  }

  const image = (
    <img
      src={isLazyTriggered ? responsiveImage.src : defaultImage}
      srcSet={isLazyTriggered ? responsiveImage.srcSet : ''}
      sizes={responsiveImage.sizes}
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
