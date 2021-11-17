/* eslint-disable node/no-unsupported-features/node-builtins */
export const getImageUrl = (name: string) => {
  return new URL(`../../assets/image/${name}`, import.meta.url).href;
};
