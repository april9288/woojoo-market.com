export const MonthCalculator = time => {
    const MonthList = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    // example -> updated on Apr 29, 2019
    return `Updated on ${
        MonthList[time.getMonth()]
    } ${time.getDate()}, ${time.getFullYear()}`;
};

export const TimeCalculator = timeStamp => {
    const past = new Date(timeStamp);
    const now = new Date();

    // time difference in minute
    const difference = (now.getTime() - past.getTime()) / 60000;

    if (difference < 60) {
        // return time difference in min
        return `Updated ${Math.round(difference)} mins ago`;
    } else if (difference < 1440) {
        // return time difference in hour
        const hourDifference = difference / 60;
        return `Updated ${Math.round(hourDifference)} hours ago`;
    } else if (difference < 43200) {
        // return time difference in date
        const dateDifference = difference / (24 * 60);
        return `Updated ${Math.round(dateDifference)} days ago`;
    } else {
        // otherwise return the full date
        return MonthCalculator(past);
    }
};
