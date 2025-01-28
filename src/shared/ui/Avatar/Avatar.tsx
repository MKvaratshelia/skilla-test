import { classNames, Mods } from "../../lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import AvatarIcon from "../../assets/icons/avatar.svg?react";

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    name?: string;
}

export const Avatar = ({ className, src, alt, name }: AvatarProps) => {
    const mods: Mods = {};

    if (!src && !name) {
        return (
            <div className={classNames(cls.avatar, mods, [className])}>
                <AvatarIcon />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.avatar, mods, [className])}
        />
    );
};
