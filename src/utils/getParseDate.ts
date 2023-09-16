export const getParseDate = (date: string) => {
  const newDate = new Date(date);
  return (
    String(newDate.getFullYear()).slice(2) +
    '.' +
    String(newDate.getMonth() + 1) +
    '.' +
    String(newDate.getDate() + 1)
  );
};
