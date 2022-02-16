import React from "react";
import { useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import CargandoSpinner from "../../Structure/Spinners/Spinner";
import "./ItemListContainer.css";
import {useParams} from 'react-router-dom'
import { collection, getDocs, query, getFirestore, where } from "firebase/firestore";
import {app} from "../../../firebase/firebase"



function ItemListContainer() {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState({});
  const {idCategoria}=useParams();

  useEffect(() => {

    const db = getFirestore(app)

    const consultaProductos = idCategoria? 
                                    query(collection(db, "productos"), where('categoria', '==', idCategoria)) 
                              : 
                                    query(collection(db, "productos"))  

    getDocs(consultaProductos)
    .then(resp => setProductos (resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
  
    .catch(err => err)
    .finally(() => setCargando(false));

  }, [idCategoria]);



 

    

  return (
    <div>
      {cargando ? (
          <CargandoSpinner mensaje="Cargando Contenido Listado Productos"/>
      ) : (
          <ItemList productos={productos} />
      )}
    </div>
  );
}

export default ItemListContainer;






