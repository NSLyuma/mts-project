import add from 'date-fns/addDays';

// сделать из объекта даты строку в формате дд.мм
export const getDateString = (date: Date): string => {
  const day =
    String(date.getDate()).length > 1 ? date.getDate() : `0${date.getDate()}`;

  const month =
    String(date.getMonth() + 1).length > 1
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;

  return `${day}.${month}`;
};

// получить дату Х дней назад
export const getDateAgo = (date: Date, days: number): Date => {
  // клонирование даты (date), чтобы не изменять её
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy;
};

// получить список дат в строковом формате между двумя датами
export const getDatesList = (startDate: Date, endDate: Date): string[] => {
  // клонирование даты (startDate), чтобы не изменять её
  let currentDate = new Date(startDate);
  const datesList = [];

  while (currentDate <= endDate) {
    datesList.push(getDateString(currentDate));
    currentDate = add(currentDate, 1);
  }

  return datesList;
};
