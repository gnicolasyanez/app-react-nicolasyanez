import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ productos }) {
  return (
    <li className="cards_item">
      <div className="card">
          <img className="card_image"src={productos.imageUrl} alt={productos.name} />
        <div className="card_content">
          <h2 className="card_title">{`${productos.name}`}</h2>
          <p className="card_text">{`${productos.descripcion}`}</p>
          <p className="card_text">stock : {`${productos.stock}`}</p>
          <Link to={`/item/${productos.id}`}>
            <button className="btn card_btn">Detalles</button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Item;
