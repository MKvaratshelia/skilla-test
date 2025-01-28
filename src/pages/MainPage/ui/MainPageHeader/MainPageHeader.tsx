import { Icon } from "../../../../shared/ui/Icon/Icon";
import cls from "../MainPageHeader/MainPageHeader.module.scss";
import ArrowIcon from "../../../../shared//assets/icons/arrow.svg?react";

export const MainPageHeader = () => {
    return (
        <header className={cls.header}>
            <div className={cls.type}>Тип</div>
            <div className={cls.time}>
                Время
                <span className={cls.icon}>
                    <Icon Svg={ArrowIcon} />
                </span>
            </div>
            <div className={cls.worker}>Сотрудник</div>
            <div className={cls.call}>Звонок</div>
            <div className={cls.source}>Источник</div>
            <div className={cls.grade}>Оценка</div>
            <div className={cls.duration}>
                Длительность
                <span className={cls.icon}>
                    <Icon Svg={ArrowIcon} />
                </span>
            </div>
        </header>
    );
};
