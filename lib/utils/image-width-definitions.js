import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
  ScreenConfig,
} from '@kisskissbankbank/kitten'

export const ONE_IN_XXS_CONTAINER = `100vw - ${CONTAINER_PADDING_THIN * 2}px`
export const ONE_IN_7_COLS = `(100vw - ${CONTAINER_PADDING * 2}px) * (7/12)`
export const ONE_IN_XL_7_COLS = `(${
  ScreenConfig.XL.min - CONTAINER_PADDING * 2
}px) * (7/12))`
