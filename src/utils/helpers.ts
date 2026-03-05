import { format } from "date-fns";

interface FormatDateProps {
  dateString: string;
  formatType: string;
}

export const formatDate = ({
  dateString,
  formatType,
}: FormatDateProps): string => {
  const date = new Date(dateString);

  return format(date, formatType);
};

export const formatNumberCompact = (number: number) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
};

export const formatNumberStandard = (number: number) => {
  const formatter = Intl.NumberFormat("en", { notation: "standard" });
  return formatter.format(number);
};
