import { classNames } from "../../lib/classNames/classNames";
import { Text } from "../Text/Text";
import cls from "./Info.module.scss";
import { InfoProps, InfoTheme } from "./types";

export const Info = (props: InfoProps) => {
    const { text, className, theme = InfoTheme.NORMAL, error = false } = props;

    if (error) {
        return (
            <Text
                text={text}
                className={classNames(cls.text, {}, [className])}
            />
        );
    }
    return (
        <div className={classNames(cls.info, {}, [className, cls[theme]])}>
            <Text text={text} />
        </div>
    );
};
