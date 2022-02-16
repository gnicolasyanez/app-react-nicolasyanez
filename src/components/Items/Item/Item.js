import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ producto }) {
  return (
    <li className="cards_item">
      <div className="card">
          <img className="card_image"src={producto.imageUrl} alt={producto.name} />
        <div className="card_content">
          <h2 className="card_title">{`${producto.name}`}</h2>
          <p className="card_text">{`${producto.descripcion}`}</p>
          <p className="card_text">stock : {`${producto.stock}`}</p>
          <Link to={`/item/${producto.id}`}>
            <button className="btn card_btn">Detalles</button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default Item;
