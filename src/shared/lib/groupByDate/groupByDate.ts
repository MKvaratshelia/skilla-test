/* eslint-disable @typescript-eslint/no-explicit-any */


export const groupByDate = (data: any[]) => {
    return data.reduce((acc , el) => {
        const date = el.date_notime;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(el);
        return acc;
    }, {});
};