import React from "react";
import { memo } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = memo ( ({ productos }) => {
  
  return(
          
          <div className="principalCards">
              <ul className="listaCards">
              {productos.map((productos) => (<Item key={productos.id} productos={productos} />))}
              </ul>
         </div>
    )
  } , (viejaProp, nuevaProp)=> viejaProp.productos.length === nuevaProp.productos.length)


export default ItemList;
