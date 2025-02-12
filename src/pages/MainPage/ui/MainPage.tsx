import cls from "./MainPage.module.scss";
import { MainPageHeader } from "./MainPageHeader/MainPageHeader";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Select } from "@/shared/ui/Select/Select";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchCalls } from "@/entities/Call/model/services/fetchCalls";
import { Text } from "@/shared/ui/Text/Text";
import { Icon } from "@/shared/ui/Icon/Icon";
import CloseIcon from "@/shared/assets//icons/closeIcon.svg?react";
import { fillterByType } from "@/entities/Call/model/slice/CallSlice";
import { Calendar } from "@/widgets/Calendar/ui/Calendar";
import { CallsList, getCalls, getError, getIsLoading } from "@/entities/Call";

const options = [
    { value: "2", title: "Все типы" },
    { value: "1", title: "Входящие" },
    { value: "0", title: "Исходящие" },
];

// const sevenDaysAgo = format(subDays(new Date(), 3), "yyyy-LL-dd");

export const MainPage = () => {
    const [selectedType, setSelectedType] = useState<string>("");
    const calls = useSelector(getCalls);
    const loading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const [visibleReset, setVisibleReset] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const selectedItem = useMemo(() => {
        return options.find((i) => i.value === selectedType);
    }, [selectedType]);

    const handleChangeType = useCallback(
        (value: string) => {
            setSelectedType(value);
            dispatch(fillterByType(value));
            setVisibleReset(true);
        },
        [dispatch]
    );

    const resetFilters = () => {
        dispatch(fetchCalls());
        setVisibleReset(false);
    };

    useEffect(() => {
        dispatch(fetchCalls());
    }, [dispatch]);

    return (
        <div className={cls.pageWrapper}>
            <div className={cls.filters}>
                <div className={cls.selectBlock}>
                    <Select
                        onChange={handleChangeType}
                        selected={selectedItem?.title}
                        placeholder='Все типы'
                        className={cls.typeSelect}
                        options={options}
                    />
                    {visibleReset && (
                        <button
                            onClick={resetFilters}
                            type='button'
                            className={cls.reset}
                        >
                            <Text text='Сбросить фильтры' />
                            <div className={cls.icon}>
                                <Icon Svg={CloseIcon} />
                            </div>
                        </button>
                    )}
                </div>
                <div>
                    <Calendar />
                </div>
            </div>
            <div className={cls.content}>
                <MainPageHeader />
                {Object.entries(calls).length === 0 && <span>Список пуст</span>}
                {error && <span>{error}</span>}
                {loading && <span>загрузка....</span>}
                {!loading &&
                    Object.entries(calls).map(([date, call]) => {
                        return (
                            <CallsList
                                key={date}
                                time={date}
                                data={call}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
