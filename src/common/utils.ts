export const exists = <T>(array: T[], element: T) => {
  return array.indexOf(element) > -1;
};

export const removeFalsies = <T>(array: T[]) => {
  return array.filter((x) => !!x);
};
