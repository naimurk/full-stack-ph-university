const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const genders = ["Male", "Female", "Non-binary", "Prefer not to say"];

export const bloodOptions = bloodTypes.map((item) => ({
  label: item,
  value: item,
}));
export const genderOptions = genders.map((item) => ({
  label: item,
  value: item,
}));
