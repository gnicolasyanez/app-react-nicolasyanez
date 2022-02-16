import React from 'react';
import './ChekOut.css'

function OrderItem(ordenDetalle) {
    
    const { itemPrecio , itemTotal, itemImageUrl, itemQty, itemName } =ordenDetalle.ordenDetalle;

  return (
                <div className="cartItemDetails">
                <div className="ordenCelda">
                        <img className="cartItemImagen" src={itemImageUrl} alt={itemName} />
                </div>
                <div className="ordenCelda">{itemName}</div>
                <div className="ordenCelda">{itemPrecio}</div>
                <div className="ordenCelda">{itemQty}</div>
                <div className="ordenCelda">{itemTotal}</div>
                </div>
  )
}

export default OrderItem;
