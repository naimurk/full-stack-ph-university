const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const genders = ["Male", "Female", "Non-binary", "Prefer not to say"];
const weekArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const bloodOptions = bloodTypes.map((item) => ({
  label: item,
  value: item,
}));
export const genderOptions = genders.map((item) => ({
  label: item,
  value: item,
}));
export const weekOptions = weekArray.map((item) => ({
  label: item,
  value: item,
}));

export const status = [
  { label: "Ongoing", value: "ONGOING" },
  { label: "Upcoming", value: "UPCOMING" },
  { label: "Ended", value: "ENDED" },
];
