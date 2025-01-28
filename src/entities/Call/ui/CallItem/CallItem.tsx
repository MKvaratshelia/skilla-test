import { Avatar } from "../../../../shared/ui/Avatar/Avatar";
import { Icon } from "../../../../shared/ui/Icon/Icon";
import { Text } from "../../../../shared/ui/Text/Text";
import IncomingCall from "../../../../shared/assets/icons/incoming.svg?react";
import OutgoingCall from "../../../../shared/assets/icons/outgoing.svg?react";
import cls from "./CallItem.module.scss";

import { format } from "date-fns";
import { Info } from "../../../../shared/ui/Info/Info";
import { InfoTheme } from "../../../../shared/ui/Info/types";
import { formatTime } from "../../../../shared/lib/formatTime/formatTime";
import { Call } from "../../model/types/types";
import { formatPhoneNumber } from "../../../../shared/lib/formatPhoneNumber/formatPhoneNumber";

interface ICallItem {
    data: Call;
    id: number;
}

export const CallItem = ({ data, id }: ICallItem) => {
    const { source, date, time, person_avatar, in_out, partner_data } = data;
    return (
        <div className={cls.callItem}>
            <div className={cls.type}>
                <Icon Svg={in_out === 0 ? OutgoingCall : IncomingCall} />
            </div>
            <div className={cls.time}>
                <Text text={format(date, "HH:mm")} />
            </div>
            <div className={cls.worker}>
                <div className={cls.workerAvatar}>
                    <Avatar
                        alt='аватар'
                        src={person_avatar}
                    />
                </div>
            </div>
            <div className={cls.call}>
                <Text text={formatPhoneNumber(partner_data.phone)} />
            </div>
            <div className={cls.source}>
                <Text text={source} />
            </div>
            <div className={cls.grade}>
                {id === 0 && (
                    <Info
                        text='Хорошо'
                        theme={InfoTheme.NORMAL}
                    />
                )}
                {id === 1 && (
                    <Info
                        text='Отлично'
                        theme={InfoTheme.GOOD}
                    />
                )}
                {id === 2 && (
                    <Info
                        text='Плохо'
                        theme={InfoTheme.BAD}
                    />
                )}
            </div>
            <div className={cls.duration}>{formatTime(time)}</div>
        </div>
    );
};
