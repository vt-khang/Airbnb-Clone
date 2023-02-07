import date from 'date-and-time';

export const formatStringDate = (startDate: string, endDate: string) => {
  const parseStartDate = date.parse(startDate, 'DD/MM/YYYY');
  const parseEndDate = date.parse(endDate, 'DD/MM/YYYY');

  if (parseStartDate.getMonth() === parseEndDate.getMonth()
    && parseStartDate.getFullYear() === parseEndDate.getFullYear()) {
    return `Ngày ${parseStartDate.getDate()} - Ngày ${parseEndDate.getDate()} tháng ${parseEndDate.getMonth() + 1}`;
  } else {
    return `Ngày ${parseStartDate.getDate()} tháng ${parseStartDate.getMonth() + 1} - Ngày ${parseEndDate.getDate()} tháng ${parseEndDate.getMonth() + 1}`
  }
}

export const fixFloatRating = (x: number) => {
  if (x.toString().length < 4) {
    return Number(x).toFixed(1).toString().replace('.', ',');
  } else {
    return Number(x).toFixed(2).toString().replace('.', ',');
  }
}