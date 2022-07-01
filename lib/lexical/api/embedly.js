import qs from "qs";

const EMBEDLY_API_URL = "https://api.embed.ly/1/";

export const oembed = (customConfig) => {
  if (!customConfig.key) {
    throw new Error("You need an API key to call Embedly");
  }
  return fetch(
    `${EMBEDLY_API_URL}oembed?${qs.stringify({
      secure: document.location.protocol === "https:",
      scheme: document.location.protocol.replace(":", ""),
      ...customConfig,
    })}`
  ).then((response) => response.json());
};
