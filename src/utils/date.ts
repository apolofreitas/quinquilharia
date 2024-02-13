import { format } from "date-fns";

type DateValue = string | number | Date;

const formats = {
  default: "PP",
};

export const formatDate = (
  date: DateValue,
  type: keyof typeof formats = "default"
) => {
  return format(date, formats[type]);
};
