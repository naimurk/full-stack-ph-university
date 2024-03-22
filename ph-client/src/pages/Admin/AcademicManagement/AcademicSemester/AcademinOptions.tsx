export const academicOptions = [
  { value: "01", label: "Autumn" },
  { value: "02", label: "Summer" },
  { value: "03", label: "Fall" },
];
const currentYear = new Date().getFullYear();
const numberArr = [0, 1, 2, 3, 4];
export const yearOptions = numberArr.map((number) => ({
  label: String(currentYear + number),
  value: String(currentYear + number),
}));
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = months.map((month) => ({
  label: month,
  value: month,
}));
