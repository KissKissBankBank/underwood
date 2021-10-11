import styled, { css } from 'styled-components'
import { COLORS, pxToRem, ScreenConfig } from '@kisskissbankbank/kitten'

const Toolbar = styled.div`
  display: flex;
  overflow-y: scroll;
  padding: ${pxToRem(12)} 0;
  background-color: ${COLORS.background3};

  > :last-child {
    margin-right: 0;
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    overflow-y: initial;
    padding: ${pxToRem(15)} 0;
  }

  &.Editor-Toolbar__whiteMode {
    background-color: ${COLORS.background1};
  }

  &.Editor-Toolbar__centered {
    justify-content: center;
  }

  ${({ whiteMode }) =>
    whiteMode &&
    css`
      background-color: ${COLORS.background1};
    `}
`

export default Toolbar
