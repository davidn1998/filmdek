export const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const formatDate = (dateStr: string): string => {
  const dateData = dateStr.split("-");
  const year = dateData[0];
  const month = months[+dateData[1] - 1];
  const day = dateData[2];

  return `${month} ${day} ${year}`;
};
