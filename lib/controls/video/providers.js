export const calculRatio = ({ height, width }) =>
  ((height / width) * 100).toPrecision(4);

export const getDataForProvider = (response) => {
  if (
    response.type === "video" ||
    (response.type === "rich" && response.provider_name !== "SoundCloud")
  ) {
    return {
      ratio: calculRatio({
        height: response.height,
        width: response.width,
      }),
      html: response.html,
    };
  }
  // IT'S A YOUTUBE SHORT
  if (
    response?.url?.includes("/shorts/") &&
    response?.url?.includes("youtube.")
  ) {
    return {
      ratio: 67.5,
      html: `<iframe class="embedly-embed" src="${encodeURI(
        response.url.replace("/shorts/", "/embed/")
      )}" width="100%" height="auto" title="YouTube shorts embed" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>`,
    };
  }
  switch (response.provider_name) {
    case "SoundCloud":
      return {
        ratio: calculRatio({ height: 6, width: 16 }),
        html: response.html,
      };
    case "Ovizer":
      return {
        ratio: calculRatio({
          height: response.thumbnail_height || 1,
          width: response.thumbnail_width || 1,
        }),
        html: `<iframe src="${response.url}" width="100%" height="auto" allowFullScreen></iframe>`,
      };
    case "Apple Podcasts":
      const embededUrl = response.url.replace(
        "podcasts.apple.com",
        "embed.podcasts.apple.com"
      );
      return {
        height: 183,
        ratio: 0.1,
        html: `<iframe allow="autoplay *; encrypted-media *; fullscreen *" height="175" style=";overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="${embededUrl}&theme=auto"></iframe>`,
      };
    default:
      return {
        ratio: 67.5,
        html: `<iframe src="${response.url}" width="100%" height="auto" allowFullScreen></iframe>`,
      };
  }
};
