import React, { useContext } from 'react'
import { ArrowContainer, COLORS, pxToRem, Text } from '@kisskissbankbank/kitten'
import styled from 'styled-components'
import { EditorContext } from '../context'

const StyledArrowContainer = styled(ArrowContainer)`
  display: flex;
  position: absolute;
  min-width: max-content;
  padding: 0 ${pxToRem(20)};
  background-color: ${COLORS.background1};
  margin-top: ${pxToRem(0)};
  transition: opacity 0.1s ease-out, margin-top 0.1s ease-out;
  z-index: 99999;
`

const DeleteLink = styled(Text)`
  flex: 1;
  width: 100%;
  text-align: center;
  display: block;
  padding: 0;
`

const VerticalSeparator = styled.span`
  flex: 0;
  border-left: ${pxToRem(2)} solid ${COLORS.font2};
  margin: ${pxToRem(5)} ${pxToRem(10)};
`

const ShareLink = styled(Text)`
  flex: 2;
  max-width: ${pxToRem(240)};
  text-overflow: ellipsis;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`

const LinkInline = ({ onDelete, url }) => {
  const [{ translations }] = useContext(EditorContext)
  return (
    <StyledArrowContainer
      position="top"
      shadow
      borderWidth={1}
      borderColor={COLORS.line1}
      contentEditable={false}
    >
      <DeleteLink
        href="#"
        tag="a"
        size="micro"
        color="error"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onDelete(e)
        }}
      >
        {translations.link.button.delete}
      </DeleteLink>
      <VerticalSeparator />
      <ShareLink
        href={url}
        target="_blank"
        rel="noopener"
        tag="a"
        size="micro"
        color="font1"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          window.open(url, '_blank').focus()
        }}
      >
        {url}
      </ShareLink>
    </StyledArrowContainer>
  )
}

export default LinkInline
