import { sanitizeUrl } from "@braintree/sanitize-url";
import pick from "lodash/fp/pick";

export default function sanitizeIframeReactComp(iframeReactComp) {
  return {
    ...iframeReactComp,
    props: {
      ...pick([
        "allow",
        "allowFullScreen",
        "className",
        "style",
        "sandbox",
        "frameBorder",
        "height",
        "scrolling",
        "title",
        "width",
      ])(iframeReactComp?.props),
      src: sanitizeUrl(iframeReactComp?.props?.src),
    },
  };
}
