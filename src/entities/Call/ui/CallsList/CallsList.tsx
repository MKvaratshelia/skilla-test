import { CallItem } from "../CallItem/CallItem";
import { Text } from "../../../../shared/ui/Text/Text";

import cls from "./CallsList.module.scss";
import { formatDate } from "../../../../shared/lib/formatDate/formatDate";
import { compareDate } from "../../../../shared/lib/compareDate/compareDate";
import { Call } from "../../model/types/types";

interface CallsListProps {
    time: string;
    data: Call[];
}

export const CallsList = (props: CallsListProps) => {
    const { time, data } = props;

    return (
        <div className={cls.calls}>
            {!compareDate(time) && (
                <div className={cls.dateBlock}>
                    <Text
                        className={cls.date}
                        text={formatDate(time)}
                    />
                    <Text
                        className={cls.number}
                        text={String(data?.length)}
                    />
                </div>
            )}
            {data.map((card) => {
                return (
                    <CallItem
                        key={card.id}
                        data={card}
                    />
                );
            })}
        </div>
    );
};
