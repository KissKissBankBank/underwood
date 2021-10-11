import React, { useContext } from 'react'
import { Button, COLORS, VisuallyHidden } from '@kisskissbankbank/kitten'
import classNames from 'classnames'
import { LoadingAnimation } from '../loading-animation'
import { EditorContext } from '../../context'

export default (props) => {
  const [{ translations }] = useContext(EditorContext)
  return (
    <Button
      modifier="helium"
      size="big"
      aria-live="polite"
      as="div"
      {...props}
      className={classNames(
        'kiss-SubmitLoader',
        'k-u-cursor-not-allowed',
        props.className,
      )}
    >
      <LoadingAnimation color={COLORS.background1} />
      <VisuallyHidden>{translations.button_loading}</VisuallyHidden>
    </Button>
  )
}
