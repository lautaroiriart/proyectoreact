import React from 'react'
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = () => {
    return(
        <React.Fragment>
        <h1>Catalogo de productos</h1>
        <ItemCount stock="6"/>
        </React.Fragment>
    )
}

export default ItemListContainer;