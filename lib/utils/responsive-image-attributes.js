import { isServerAllowed, urlBuilder } from './responsive-image-handler'
import { isGif, isSvg } from './validators'

export const responsiveImageAttributes = (
  imagePath,
  {
    imageSizes,
    breakpoints,
    imageSizesInViewport,
    ratio = 0,
    upscale = true,
    format = 'jpg',
    config,
  } = {},
) => {
  if (!imagePath) return
  if (
    isSvg(imagePath) ||
    isGif(imagePath) ||
    !ENABLE_RESPONSIVE_IMAGES ||
    !isServerAllowed(imagePath, config)
  ) {
    return { src: imagePath, srcSet: '', sizes: '' }
  }
  if (breakpoints.length !== imageSizesInViewport.length) return
  const formatString = `format:${format}`
  const filters = ['quality:90', formatString]

  // `src` attribute is built with the last (biggest) size in the Array
  // at the best quality
  const sortedImageSizes = [...imageSizes].sort((a, b) => b - a)
  const imageWidth = sortedImageSizes[0]
  const src = urlBuilder(
    imagePath,
    {
      width: imageWidth,
      height: Math.floor(imageWidth * ratio),
      filters: filters,
      upscale,
    },
    config,
  )

  const srcSet = imageSizes
    .reduce((sizeAcc, sizeCur) => {
      return sizeAcc.concat(
        `${urlBuilder(
          imagePath,
          {
            width: sizeCur,
            height: Math.floor(sizeCur * ratio),
            filters: filters,
            upscale,
          },
          config,
        )} ${sizeCur}w`,
      )
    }, [])
    .join(', ')

  const sizes = breakpoints
    .reduce(
      (acc, cur, idx) => {
        return acc.concat(
          `(min-width: ${cur}px) calc(${imageSizesInViewport[idx]})`,
        )
      },
      [`calc(${imageSizesInViewport[0]})`],
    )
    .reverse()
    .join(', ')

  return { src, srcSet, sizes }
}
