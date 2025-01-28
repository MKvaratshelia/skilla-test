import { format } from "date-fns";

export const compareDate = (date: string) => {
    const formatDate = "yyyy-MM-dd";
    const today = format(new Date(), formatDate);

    return today === format(date, formatDate);
};