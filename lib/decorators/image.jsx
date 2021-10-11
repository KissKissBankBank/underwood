import React from 'react'

const Image = (props) => {
  const { src, alt, style, width, height } = props.contentState
    .getEntity(props.entityKey)
    .getData()
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={src}
        alt={alt}
        width={width && height ? width : undefined}
        height={width && height ? height : undefined}
        style={{
          width: style['width'],
        }}
      />
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
