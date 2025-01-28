

export interface CallItemProps {
    id: number;
    source: string;
    date: string;
    record: string;
    time: number;
    status: "Не дозвонился" | "Дозвонился";
    to_number: string;
    person_avatar: string;
    errors: string[];
    in_out: number | string;
    date_notime: string;
}