import React, { useState } from "react";
import './ItemCount.css'
 
function ItemCount({ contadorInicial, contadorStock, contadorMinimo, onAdd}) {
  const [contador, mueveContador] = useState(contadorInicial);
  
console.log(contadorInicial)
// console.log(contadorStock)
  const sumaContador = () => {
    contador < contadorStock
      ? mueveContador(contadorprevio => contadorprevio + 1) 
      :  console.log('1 es el mínimo de compra');
  };

  const restaContador = () => {
    contador > contadorMinimo &&
      mueveContador(contadorprevio => contadorprevio - 1);
  };

  const reseteaContador = () =>{
      mueveContador(contadorInicial)
  }

  return (
    <div className="counter">
      <h1 className="contadorText"> {contador}   </h1>
      <button onClick={restaContador}className="botonCard"> - </button>
      <button onClick={reseteaContador} className="botonCard2"> Resetear </button>
      <button onClick={sumaContador} className="botonCard"> + </button>
      <br/>
      <button onClick={()=> {onAdd(contador); reseteaContador()}} hidden={contador < 1 && "hidden"} className="btnAddCart">Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
