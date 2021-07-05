import moment from 'moment';

export const now = (format = 'yyyy-MM-DD') => moment().format(format);
export const getDateFormated = (date, format = 'yyyy-MM-DD') => moment(date).format(format);
