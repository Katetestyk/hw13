import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
   position: fixed;
   display: flex;
   flex-direction: column;
   top: 80px;
   left: 0;
   background: #fff;
   min-width: 360px;
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
 


export const Order = ({ orders }) => {
    return(
        <OrderStyled>
           <OrderTitle>Ваш заказ</OrderTitle> 
           <OrderContent>
             {orders.length ?
             <OrderList>
                    {orders.map(order => <OrderListItem order={order}/>)}
             </OrderList> :
             <EmptyList>Список заказов пуст</EmptyList>}
         </OrderContent>             
         <Total>
              <span>Итого </span>  
             <span>5 </span> 
             <TotalPrice>850 P </TotalPrice>            
             
         </Total>
         <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}