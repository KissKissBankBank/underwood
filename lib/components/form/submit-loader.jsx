import React, { useContext } from 'react'
import {
  Button,
  COLORS,
  VisuallyHidden,
  KissKissLoadingAnimation,
} from '@kisskissbankbank/kitten'
import classNames from 'classnames'
import { EditorContext } from '../../context'

export default ({className, ...props}) => {
  const [{ translations }] = useContext(EditorContext)
  return (
    <Button
      modifier="helium"
      size="big"
      aria-live="polite"
      as="div"
      className={classNames(
        'kiss-SubmitLoader',
        'k-u-cursor-not-allowed',
        className,
      )}
      {...props}
    >
      <KissKissLoadingAnimation color={COLORS.background1} />
      <VisuallyHidden>{translations.button_loading}</VisuallyHidden>
    </Button>
  )
}
