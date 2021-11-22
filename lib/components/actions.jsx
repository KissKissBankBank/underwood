import styled from 'styled-components'
import { pxToRem, ScreenConfig } from '@kisskissbankbank/kitten'

const Actions = styled.div`
  display: flex;

  > * {
    margin-left: calc(-1 * var(--border-width, 1px));
  }

  :first-child > :first-child {
    margin-left: 0;
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-right: ${pxToRem(20)};

    > :not(:first-child) {
      margin-left: calc(-1 * var(--border-width, 1px));
    }
  }

  > :hover:not(:disabled),
  > :focus:not(:disabled) {
    z-index: 1;
  }

  .Editor__toolbar__button--isSelected {
    z-index: 2;
  }
`

export default Actions
