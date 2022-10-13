import styled, { css } from 'styled-components'
import { pxToRem, ScreenConfig } from '@kisskissbankbank/kitten'

const Toolbar = styled.div`
  display: flex;
  overflow-y: scroll;
  padding: ${pxToRem(12)} 0;
  background-color: var(--color-grey-200);

  > :last-child {
    margin-right: 0;
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    overflow-y: initial;
    padding: ${pxToRem(15)} 0;
  }

  &.Editor-Toolbar__whiteMode {
    background-color: var(--color-grey-000);
  }

  &.Editor-Toolbar__centered {
    justify-content: center;
  }

  ${({ whiteMode }) =>
    whiteMode &&
    css`
      background-color: var(--color-grey-000);
    `}
`

export default Toolbar
