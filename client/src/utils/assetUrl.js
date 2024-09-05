export const assetUrl = (path) =>
  `${process.env.REACT_APP_BASE_URL || ""}${path}`;
