import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";

function ItemDetail({ prodIndividual }) {
  const { imageUrl, name, descripcion, precio, inicial, stock, minimo } = prodIndividual;
  console.log(inicial)
  const navigate = useNavigate();
  
  
  const onAdd =(contador) => {
      agregarItemCarrito({...prodIndividual, qty: contador})
  }

  const {agregarItemCarrito} = useCartContext()


  return (
    <div className="containerItemDetail">
      <div className="boxItemDetail">
        <img className="prodImgItemDetail" src={imageUrl} alt={name} />
        <div className="prodInfoItemDetail">
            <h1 className="prodTituloItemDetail">{name}</h1>
            <p className="prodPrecioItemDetail">{precio}</p>
            <p className="prodDescItemDetail">{descripcion}</p>
            <p className="prodStockItemDetail">stock : {stock}</p>
            <br />
            <br />
            <ItemCount
                contadorInicial={inicial}
                contadorStock={stock}
                contadorMinimo={minimo} 
                onAdd={onAdd}/>
            <br />
            <br />
            <button className="btnItemDetail btnCardItemDetail" onClick={()=>navigate(-1)}>Volver</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;