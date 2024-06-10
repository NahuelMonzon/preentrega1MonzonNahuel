import React from 'react';
import { Button } from 'antd';
import Cartwidget from '../cartwidget/cartwidget';


const Navbar = ({ handleCategoria }) => {

   const cambiarCategoria = (categoria) => {
      handleCategoria(categoria)
   }

  return (
    <nav className='navbar'>
      <Button onClick={() => cambiarCategoria('todos')}>Iphone</Button>
      <Button onClick={() => cambiarCategoria('electronics')}>Motorola</Button>
      <Button onClick={() => cambiarCategoria('jewelery')}>Samsung</Button>
      {/* <Button onClick={() => cambiarCategoria('#')}>Xioami</Button> */}
      <Cartwidget />
    </nav>
  );
};

export default Navbar;
