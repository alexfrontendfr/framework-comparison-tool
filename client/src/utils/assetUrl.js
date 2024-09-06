export const assetUrl = (path) => {
  const baseUrl = process.env.REACT_APP_BASE_URL || "";
  return `${baseUrl}${path}`;
};
