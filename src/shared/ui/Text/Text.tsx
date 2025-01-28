import { memo } from "react";
import { classNames } from "../../lib/classNames/classNames";

interface TextProps {
    className?: string;
    text: string;
}

export const Text = memo((props: TextProps) => {
    const { text, className } = props;

    return <p className={classNames("text", {}, [className])}>{text}</p>;
});
