import cls from "./Calendar.module.scss";
import { Icon } from "../../../shared/ui/Icon/Icon";
import { Text } from "../../../shared/ui/Text/Text";
import CalendarIcon from "../../../shared/assets/icons/icon-calendar.svg?react";
import ArrowШсщт from "../../../shared/assets/icons/arrow.svg?react";
import { memo, useState } from "react";
import { format, subDays } from "date-fns";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch";
import { fetchCallsWithDates } from "../../../entities/Call/model/services/fetchCalls";

const dates = [
    { value: String(format(subDays(new Date(), 3), "yyyy-LL-dd")), title: "3 дня" },
    { value: String(format(subDays(new Date(), 7), "yyyy-LL-dd")), title: "7 дней" },
];

const today = format(new Date(), "yyyy-LL-dd");

// Игрался с получением списка по датам

export const Calendar = memo(() => {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState<string>(dates[0].title);
    const dispatch = useAppDispatch();

    const onChangeDate = (id: number) => {
        setId(id);
        setTitle(dates[id].title);
        dispatch(fetchCallsWithDates(dates[id].value, today));
    };

    return (
        <div className={cls.dates}>
            <button
                onClick={() => onChangeDate(0)}
                disabled={id === 0}
                className={cls.arrowLeft}
            >
                <Icon Svg={ArrowШсщт} />
            </button>
            <div className={cls.info}>
                <Icon
                    className={cls.calendar}
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
        </div>
    );
});
