export const getFieldArray = (field: string) => {
  return field ? field.split(' ') : [];
};
