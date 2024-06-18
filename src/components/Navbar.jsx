import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'; 
import Cart from './cart';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <h1>AccessoriesTech</h1>
      </Link>
        <ul>
          <li>
            <NavLink to={'/'}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={'categoria/IphoneCases'}>Iphone Cases</NavLink>
          </li>
          <li>
            <NavLink to={'categoria/SamsungCases'}>Samsung Cases</NavLink>
          </li>
          <li>
            <NavLink to={'categoria/MotorolaCases'}>Motorola Cases</NavLink>
          </li>
          <li>
          <NavLink to={'categoria/OtherCases'}>Other Cases</NavLink>
          </li>
        </ul>
       <Cart />
    </div>
  );
};

export default Navbar;