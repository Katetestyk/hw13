
import './App.css';
import React from 'react';
import { NavBar} from './Components/NavBar';
import { Menu } from  './Components/Menu';
import { GlobalStyle }  from './Components/GlobalStyle';
import { ModalItem} from './Components/ModalItem';
import { Order } from './Components/Order';
import { useOpenItem} from './Components/Hooks/useOpenItem';
import { useOrders} from './Components/Hooks/useOrders';


function App() {
  const openItem =  useOpenItem();
  const orders = useOrders();
 
  return (
    <>
       <GlobalStyle/>
       <NavBar/>
       <Order {...orders} />
       <Menu {...openItem} />
       { openItem.openItem && <ModalItem {...openItem}  {...orders} />}
    </>
  );
}

export default App;
