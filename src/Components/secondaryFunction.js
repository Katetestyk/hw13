export const TotalPriceItems = order => {
    
    const countTopping = order.topping && order.topping.filter(item => item.checked).lenght;
    const priceTopping = (order.price * 0.1)* countTopping;
    
    return   (order.price + priceTopping) * order.count ;
};
export const formatCurrency = value => value.toLocaleString('ru-Ru',
{ style: 'currency', currency: 'RUB'});