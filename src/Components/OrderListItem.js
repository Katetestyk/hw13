import React from 'react'; 
import styled from 'styled-components';
import trashImage from '../img/trash.png';
import { TotalPriceItems } from './secondaryFunction';
import { formatCurrency } from './secondaryFunction';
import { Toppings } from './Toppings';

const  OrderItemStyled  = styled.li`
display: flex;
margin: 15px 0;
flex-wrap: wrap;
`;

const ItemName = styled.span`
     flex-grow: 1;    
`;

const ItemPrice = styled.span`
     margin-left: 20px;
     margin-right: 10px;
     min-width: 65px;
     text-align: right;     
`;

const TrashButton = styled.button`
  width: 24px;
  heigth:24px;
  border-color: transparent;
  backgroun-color: transparent;
  background-image: url(${trashImage});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

`;
const Toppings1 = styled.div`
   color: #9a9a9a;
   font-size:14px;
   width:100%;
`;


export const OrderListItem =({ order, index, deleteItem }) =>{ 
      const topping = order.topping.filter(item => item.checked)
      .map(item => item.name)
      .join(', ');
      
      
     return (
    <OrderItemStyled>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(TotalPriceItems(order))}</ItemPrice>
        <TrashButton onClick={() => deleteItem(index)}/>
        {topping && <Toppings1>Допы: {topping}</Toppings1>}
    </OrderItemStyled>

)};
