export const calculRatio = ({ height, width }) =>
  ((height / width) * 100).toPrecision(4);

export const getDataForProvider = (response) => {
  if (response.type === "video") {
    return {
      ratio: calculRatio({
        height: response.height,
        width: response.width,
      }),
      html: response.html,
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
          height: response.thumbnail_height,
          width: response.thumbnail_width,
        }),
        html: `<iframe src="${response.url}" width="100%" height="auto" allowFullScreen></iframe>`,
      };
    default:
      return {
        ratio: 67.5,
        html: `<iframe src="${response.url}" width="100%" height="auto" allowFullScreen></iframe>`,
      };
  }
};
