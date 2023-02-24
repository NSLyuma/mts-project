export const getDateString = (date: Date): string => {
  const day =
    String(date.getDate()).length > 1 ? date.getDate() : `0${date.getDate()}`;

  const month =
    String(date.getMonth() + 1).length > 1
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;

  return `${day}.${month}`;
};
