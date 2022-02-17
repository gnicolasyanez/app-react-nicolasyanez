import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import"./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../../firebase/firebase";

function ItemDetailContainer() {
    const [cargandoProdIndividual, setCargandoProdIndividual] = useState(true)
    const [prodIndividual, setProdIndividual] = useState({});
    console.log(prodIndividual)
  const {idProducto} = useParams()
  
useEffect(() => {
      const db = getFirestore(app)
      const consultaProducto = doc(db, "productos", idProducto)
      getDoc(consultaProducto)
      .then((resp) => setProdIndividual({id: resp.id, ...resp.data()}))
      .catch(err => err)
      .finally(()=> setCargandoProdIndividual(false));
 },[idProducto])

 
  return (
    <div>
            {cargandoProdIndividual ? (
           <CargandoSpinner mensaje="Cargando Item Individual"/>
       ) : (
        <ItemDetail prodIndividual={prodIndividual}/>
      )
}
    </div>
  );
}

export default ItemDetailContainer;