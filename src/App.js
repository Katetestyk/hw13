
import './App.css';
import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar} from './Components/NavBar';
import { Menu } from  './Components/Menu';
import { GlobalStyle }  from './Components/GlobalStyle';
import { ModalItem} from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem} from './Components/Hooks/useOpenItem';
import { useOrders} from './Components/Hooks/useOrders';
import { useAuth } from './Components/useAuth';
import 'firebase/compat/auth';
import { useTitle } from './Components/useTitle';
import { OrderConfirm } from './Components/OrderConfirm';
import { useOrderConfirm } from './Components/useOrderConfirm';
import { Context } from './Components/context';

const firebaseConfig = {
  apiKey: "AIzaSyDEJ0_nzPtsITEav_ka77apl6atlejsSRU",
  authDomain: "mrdonalds-93a6d.firebaseapp.com",
  projectId: "mrdonalds-93a6d",
  storageBucket: "mrdonalds-93a6d.appspot.com",
  messagingSenderId: "208717027563",
  appId: "1:208717027563:web:fe23876d3d5e7c5a7646ae"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem =  useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);
 
  return (
    <Context.Provider value={{
      auth,
       openItem,
       orders,
       orderConfirm,
       firebaseDatabase: firebase.database,
    }}>
       <GlobalStyle />
       <NavBar />
       <Order />
       <Menu />
       { openItem.openItem && <ModalItem />}
       {orderConfirm.openOrderConfirm &&  <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
