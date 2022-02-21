import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import siginImg from '../img/sign.svg';


const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;

`;

const Logo =styled.div`
display: flex;
alinng-items:center;
`;
const H1 = styled.h1`
font-size: 24px;
margin-left: 15px;
`;
const ImgLogo = styled.img`
width: 50px;
`;
const Login = styled.button`
border-color: transparent;
color: white;
background-color: transparent;
font-size: 16px;
border-color: transparent;
`;
export const NavBar =() => (
    
    <NavBarStyled>
        <Logo>
          <ImgLogo src={logoImg} alt="лого"/>
          <H1>McDonald's</H1>
        </Logo>
        <Login>
          <img src={siginImg} alt="войти"/>
          <p>войти</p>
        </Login>
    </NavBarStyled>  
);
