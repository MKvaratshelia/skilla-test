import cls from "./Calendar.module.scss";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { Text } from "../../../shared/ui/Text/Text";
import CalendarIcon from "../../../shared/assets/icons/icon-calendar.svg?react";
import ArrowШсщт from "../../../shared/assets/icons/arrow.svg?react";
import { memo, useState } from "react";
import { format, subDays } from "date-fns";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch";
import { fetchCallsWithDates } from "../../../entities/Call/model/services/fetchCalls";
import DatePicker from "react-datepicker";
import { classNames } from "../../../shared/lib/classNames/classNames";
import "react-datepicker/dist/react-datepicker.css";

const dates = [
    { value: String(format(subDays(new Date(), 3), "yyyy-LL-dd")), title: "3 дня" },
    { value: String(format(subDays(new Date(), 7), "yyyy-LL-dd")), title: "7 дней" },
];

const today = format(new Date(), "yyyy-LL-dd");

// Игрался с получением списка по датам

export const Calendar = memo(() => {
    const [dateStart, setDateStart] = useState<Date | null>(null);
    const [dateEnd, setDateEnd] = useState<Date | null>(null);

    const [isOpen, setisOpen] = useState(false);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState<string>(dates[0].title);
    const dispatch = useAppDispatch();

    const onChangeDate = (id: number) => {
        setId(id);
        setTitle(dates[id].title);
        dispatch(fetchCallsWithDates(dates[id].value, today));
    };

    const onChangeDateStart = (date: Date | null) => {
        if (date instanceof Date) {
            setDateStart(date);
        }
    };

    const onChangeDateEnd = (date: Date | null) => {
        if (date instanceof Date) {
            setDateEnd(date);
        }
    };

    const fetchData = () => {
        if (dateStart instanceof Date && dateEnd instanceof Date) {
            dispatch(fetchCallsWithDates(format(dateStart, "yyyy-LL-dd"), format(dateEnd, "yyyy-LL-dd")));
        }
        setisOpen(false);
    };
    return (
        <div className={cls.calendar}>
            <button
                onClick={() => onChangeDate(0)}
                disabled={id === 0}
                className={cls.arrowLeft}
            >
                <Icon Svg={ArrowШсщт} />
            </button>
            <div
                onClick={() => setisOpen(true)}
                className={cls.info}
            >
                <Icon
                    className={cls.calendarIcon}
                    Svg={CalendarIcon}
                />
                <Text
                    className={cls.text}
                    text={title}
                />
            </div>
            <button
                onClick={() => onChangeDate(1)}
                disabled={id === 1}
                className={cls.arrowRight}
            >
                <Icon Svg={ArrowШсщт} />
            </button>
            <div className={classNames(cls.dates, { [cls.open]: isOpen }, [])}>
                <DatePicker
                    placeholderText='Начальная дата'
                    dateFormat={"yyyy-LL-dd"}
                    selected={dateStart}
                    onChange={onChangeDateStart}
                />
                <DatePicker
                    placeholderText='Конечная дата'
                    dateFormat={"yyyy-LL-dd"}
                    selected={dateEnd}
                    onChange={onChangeDateEnd}
                />
                <button
                    disabled={!dateStart && !dateEnd}
                    onClick={fetchData}
                    className={cls.button}
                >
                    <Icon
                        className={cls.datesIcon}
                        Svg={CalendarIcon}
                    />
                </button>
            </div>
        </div>
    );
});
