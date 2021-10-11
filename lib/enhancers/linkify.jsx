import React from 'react'
import linkifyIt from 'linkify-it'
import tlds from 'tlds'

const linkify = linkifyIt({ fuzzyLink: false })
linkify.tlds(tlds)

const linkStrategy = (contentBlock, callback) => {
  const links = linkify.match(contentBlock.get('text'))
  if (typeof links !== 'undefined' && links !== null) {
    for (let i = 0; i < links.length; i += 1) {
      callback(links[i].index, links[i].lastIndex)
    }
  }
}

const Link = (props) => {
  return (
    <a
      target="_blank"
      rel="nofollow noopener"
      className="k-u-link k-u-link-primary1"
      href={props.decoratedText}
    >
      {props.children}
    </a>
  )
}

export default {
  strategy: linkStrategy,
  component: Link,
}
