import { useEffect, useRef, useState } from "react";
import cls from "./Select.module.scss";
import { classNames } from "../../lib/classNames/classNames";
import { Icon } from "../Icon/Icon";
import ArrowIcon from "../../assets/icons/arrow.svg?react";

// const options = [
//     { value: "", name: "Все типы" },
//     { value: 1, name: "Входящие" },
//     { value: 0, name: "Исходящие" },
// ];

type IOption = {
    value: string;
    title: string;
};

interface SelectProps {
    onChange: (val: string) => void;
    options: IOption[];
    className?: string;
    selected: string | undefined;
    placeholder: string;
    direction?: "left" | "right";
}

export function Select(props: SelectProps) {
    const { onChange, options, className, selected, placeholder, direction = "" } = props;
    // const [selectedType, setSelectedType] = useState("Все типы");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;
            if (target instanceof Node && !rootRef.current?.contains(target) && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [isOpen]);

    const onchangeOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            ref={rootRef}
            onClick={onchangeOpen}
            className={classNames(cls.select, {}, [className])}
        >
            <div className={cls.titleBlock}>
                <p className={cls.title}>{selected || placeholder}</p>
                <Icon
                    Svg={ArrowIcon}
                    className={classNames(cls.arrow, { [cls.open]: isOpen }, [])}
                />
            </div>

            <div className={classNames(cls.content, { [cls.open]: isOpen }, [cls[direction]])}>
                <div className={cls.options}>
                    {options &&
                        options.map((i) => {
                            return (
                                <p
                                    className={classNames(cls.option, { [cls.active]: i.title === selected }, [])}
                                    onClick={() => onChange(i.value)}
                                    key={i.title}
                                >
                                    {i.title}
                                </p>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
