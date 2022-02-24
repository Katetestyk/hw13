import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { TotalPriceItems } from './secondaryFunction';
import { formatCurrency } from './secondaryFunction';
import { projection } from './secondaryFunction';

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
const OrderTitle = styled.h2`
 text-align: center; 
 margin: 0   0 30px;
 `;

const OrderContent = styled.div`
 flex-grow: 1;
`;
const OrderList = styled.ul `
`;
const Total = styled.div`
 display: flex;
 & span:first-child {
     flex-grow: 1;
     margin:  0 0 5px;
 }
 `;
  const TotalPrice = styled.span`
      text-align: right;
      min-width: 35px;
      margin-left: 1px;
  `;
  const EmptyList = styled.p`
     text-align: center;
  `;
 
  const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping:['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
           arr => arr.lenght ? arr : 'no topping'],
    choice: ['choice',item => item ? item : 'no choices'],
  }

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase}) => {
     const dataBase = firebaseDatabase();

     const sendOrder = () => {    
         const newOrder =  orders.map(projection(rulesData));
         dataBase.ref('orders').push().set({
             nameClient: authentication.displayName,
             email: authentication.email,
             order: newOrder
         });
         setOrders([]);
     }



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
                     setOpenItem={setOpenItem}
                     />)}
             </OrderList> :
             <EmptyList>Список заказов пуст</EmptyList>}
         </OrderContent>             
         <Total>
              <span>Итого </span>  
             <span>{totalCounter}</span> 
             <TotalPrice>{formatCurrency(total)} </TotalPrice>            
             
         </Total>
         <ButtonCheckout onClick={() => {
             if (authentication) {
                 sendOrder();
             } else {
                 logIn()
             }
         }}>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}