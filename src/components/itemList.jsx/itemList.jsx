import React from 'react';
import {Item } from "../item/item"


export const ItemList = ({ productos }) => {
  return (
    <div className='contenedor'>
      {productos.map((p) => (
        <Item key={p.id}
          
        </div>
      ))}
    </div>
  );
};
