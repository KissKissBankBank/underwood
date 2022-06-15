import {
  Button,
  COLORS,
  KissKissLoadingAnimation,
  VisuallyHidden,
} from "@kisskissbankbank/kitten";
import classNames from "classnames";
import React, { useContext } from "react";
import { EditorContext } from "../../context";

export default ({ className, ...props }) => {
  const [{ translations }] = useContext(EditorContext);
  return (
    <Button
      modifier="helium"
      size="large"
      aria-live="polite"
      as="div"
      className={classNames("k-u-cursor-not-allowed", className)}
      {...props}
    >
      <KissKissLoadingAnimation color={COLORS.background1} />
      <VisuallyHidden>{translations.button_loading}</VisuallyHidden>
    </Button>
  );
};
