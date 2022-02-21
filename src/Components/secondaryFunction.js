export const TotalPriceItems = order => order.price * order.count;

export const formatCurrency = value => value.toLocaleString('ru-Ru',
{ style: 'currency', currency: 'RUB'});