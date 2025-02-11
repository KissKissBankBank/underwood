import uniq from "lodash/fp/uniq";
import { isGif, isSvg } from "./validators";

const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

export const isServerAllowed = (path, config) => {
  const server = path.replace(/https?:\/\/([0-9a-z.:]+)\/\S+/gi, "$1");
  return config?.allowedServers.indexOf(server) > -1;
};

export const assetUrl = (assetPath) => {
  return encodeURIComponent(encodeURIComponent(assetPath));
};

export const urlBuilder = (
  path,
  { width = 0, height = 0, filters = [], upscale = true },
  config
) => {
  if (isSvg(path) || isGif(path) || !ENABLE_RESPONSIVE_IMAGES) {
    return path;
  }

  const imageUrl = assetUrl(path);
  const server = config?.host;
  const hostAndSize = `${server}/resized/${width}x${height}`;

  if (!upscale) {
    filters.push("no_upscale:1");
  }

  let extension = "";
  filters.forEach((filter) => {
    const [filterKey, filterValue] = filter.split(":");

    if (filterKey === "format" && ALLOWED_EXTENSIONS.includes(filterValue)) {
      extension = `.${filterValue}`;
    }
  });

  const chainedFilters = uniq(filters).join(",");

  if (!chainedFilters) return `${hostAndSize}/options:false/${imageUrl}`;

  return `${hostAndSize}/${chainedFilters}/${imageUrl}${extension}`;
};
