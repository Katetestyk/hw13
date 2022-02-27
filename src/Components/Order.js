import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { TotalPriceItems, formatCurrency } from './secondaryFunction';
import { Context } from './context';


const OrderStyled = styled.section`
   position: fixed;
   display: flex;
   flex-direction: column;
   top: 80px;
   left: 0;
   background: #fff;
   width: 360px;
   height: calc(100% - 80px);
   box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
   padding: 20px;
`;
export const OrderTitle = styled.h2`
 text-align: center; 
 margin: 0   0 30px;
 `;

const OrderContent = styled.div`
 flex-grow: 1;
`;
const OrderList = styled.ul `
`;
export const Total = styled.div`
 display: flex;
 & span:first-child {
     flex-grow: 1;
     margin:  0 0 5px;
 }
 `;
  export const TotalPrice = styled.span`
      text-align: right;
      min-width: 35px;
      margin-left: 1px;
  `;
  const EmptyList = styled.p`
     text-align: center;
  `;
 
  

export const Order = () => {

        const {
            auth: { authentication, logIn },
            orders: { orders, setOrders }, 
            orderConfim: { setOpenOrderConfirm },
        } = useContext(Context);     

     const deleteItem = index => {
         const newOrders = orders.filter((item, i) =>
              index !== i);
         setOrders(newOrders);
     }

     const total = orders.reduce((result, order)=>
        TotalPriceItems(order + result), 0);

    const totalCounter = orders.reduce((result, order)=>
             order.count + result, 0);

    return(
        <OrderStyled>
           <OrderTitle>Ваш заказ</OrderTitle> 
           <OrderContent>
             {orders.length ?
             <OrderList>
                    {orders.map((order, index) => <OrderListItem
                     key={index}
                     order={order}
                     deleteItem={deleteItem}
                     index={index}
                     
                     />)}
             </OrderList> :
             <EmptyList>Список заказов пуст</EmptyList>}
         </OrderContent>             
         {orders.length ?
             <>
             <Total>
              <span>Итого </span>  
             <span>{totalCounter}</span> 
             <TotalPrice>{formatCurrency(total)} </TotalPrice>            
             
         </Total>
         <ButtonCheckout onClick={() => {
             if (authentication) {
                 setOpenOrderConfirm(true);
             } else {
                 logIn()
             }
         }}>Оформить</ButtonCheckout>
             </> : null
         }
        </OrderStyled>
    )
}