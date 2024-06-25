export const hasNonEmptyProperties = (object) => {
  return Object.values(object).some(
    (value) => value !== null && value !== undefined && value !== ""
  );
};
