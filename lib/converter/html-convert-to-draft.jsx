import { convertFromHTML } from 'draft-convert'
import { CompositeDecorator } from 'draft-js'
import linkDecorator from '../decorators/link'
import responsiveImageDecorator from '../decorators/responsive-image'
import lazyMediaDecorator from '../decorators/lazy-media'
import lazyImageDecorator from '../decorators/lazy-image'
import separatorDecorator from '../decorators/separator'
import quoteDecorator from '../decorators/blockquote'
import get from 'lodash/fp/get'
import isEqual from 'lodash/fp/isEqual'
import flow from 'lodash/fp/flow'
import isEmpty from 'lodash/fp/isEmpty'
import omitBy from 'lodash/fp/omitBy'

const getImageNode = get('children[0]')
const isImageWrapper = flow(get('children[0].nodeName'), isEqual('IMG'))
const isLinkWrapped = flow(get('parentElement.nodeName'), isEqual('A'))
const filterEmptyStyleProps = omitBy(isEmpty)

export const performanceDecorators = new CompositeDecorator([
  linkDecorator,
  responsiveImageDecorator,
  lazyMediaDecorator,
  separatorDecorator,
  quoteDecorator,
])

export const lazyDecorators = new CompositeDecorator([
  linkDecorator,
  lazyImageDecorator,
  lazyMediaDecorator,
  separatorDecorator,
  quoteDecorator,
])

const converter = (html) => {
  return convertFromHTML({
    htmlToStyle: (nodeName, node, currentStyle) => {
      if (node.style && node.style['margin-left'] !== '') {
        return currentStyle.add('MARGIN_LEFT')
      }
      return currentStyle
    },
    htmlToEntity: (nodeName, node, createEntity) => {
      if (nodeName === 'a') {
        if (isImageWrapper(node)) {
          const imageNode = getImageNode(node)
          return createEntity('IMAGE', 'IMMUTABLE', {
            src: imageNode.src,
            alt: imageNode.alt,
            width: imageNode.width,
            height: imageNode.height,
            style: filterEmptyStyleProps(imageNode.style),
            imageLink: node.href,
          })
        }
        return createEntity('LINK', 'MUTABLE', { url: node.href })
      }
      if (nodeName === 'img' && !isLinkWrapped(node)) {
        return createEntity('IMAGE', 'IMMUTABLE', {
          src: node.src,
          alt: node.alt,
          width: node.width,
          height: node.height,
          style: filterEmptyStyleProps(node.style),
        })
      }
      if (nodeName === 'iframe') {
        return createEntity('MEDIA', 'IMMUTABLE', {
          html: node.outerHTML,
        })
      }
      if (nodeName === 'hr') {
        return createEntity('SEPARATOR', 'IMMUTABLE')
      }
      if (nodeName === 'blockquote') {
        return createEntity('BLOCKQUOTE', 'IMMUTABLE')
      }
    },
    htmlToBlock: (nodeName, node) => {
      if (['img', 'iframe', 'hr'].includes(nodeName) || isImageWrapper(node)) {
        return 'atomic'
      }
      if (node.textContent === ' ') {
        return 'br'
      }
      if (nodeName === 'p' && node.style['text-align'] !== undefined) {
        return {
          type: 'paragraph',
          data: {
            textAlign: node.style['text-align'],
          },
        }
      }
      if (nodeName === 'h2' && node.style['text-align'] !== undefined) {
        return {
          type: 'header-two',
          data: {
            textAlign: node.style['text-align'],
          },
        }
      }
      if (nodeName === 'h3' && node.style['text-align'] !== undefined) {
        return {
          type: 'header-three',
          data: {
            textAlign: node.style['text-align'],
          },
        }
      }
      if (nodeName === 'h4' && node.style['text-align'] !== undefined) {
        return {
          type: 'header-four',
          data: {
            textAlign: node.style['text-align'],
          },
        }
      }
      if (nodeName === 'p') {
        return 'paragraph'
      }
    },
  })(html)
}

export default converter
