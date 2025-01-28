import { isYesterday, formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';


export function formatDate(par:string) {
    const today = new Date();
    const date = new Date(par).getTime()

    // Проверяем, является ли дата вчера
    if (isYesterday(date)) {
        return 'вчера';
    }

     return formatDistance(par, today, { addSuffix: true, locale: ru });
}