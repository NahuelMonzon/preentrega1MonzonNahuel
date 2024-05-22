import React from 'react';
import { Button } from 'antd';
import Cartwidget from '../cartwidget/cartwidget';
// import 'antd/dist/antd.css';

const Navbar = () => {
  return (
    <nav>
      <Button>Iphone</Button>
      <Button>Motorola</Button>
      <Button>Samsung</Button>
      <Button>Xioami</Button>
      <Cartwidget />
    </nav>
  );
};

export default Navbar;
