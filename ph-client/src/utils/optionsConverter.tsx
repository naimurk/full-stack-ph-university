export type TData = {
  label: string;
  value: string;
};

export const optionsConverter = <T, >(
  fieldOne: string,
  fieldTwo: string,
  data: T
) => {
  if (fieldOne && fieldTwo && Array.isArray(data) && data.length > 0) {
     const arr = data?.map((item) => ({label: item[fieldOne] , value : item[fieldTwo]}))
     return arr
  }
};
