export const getFieldArray = (field: string) => {
  return field ? field.split(' ') : [];
};

export const getFieldString = (type: number) => {
  switch (type) {
    case 0:
      return 'UX';
    case 1:
      return 'BX';
    case 2:
      return 'DF';
  }
};
