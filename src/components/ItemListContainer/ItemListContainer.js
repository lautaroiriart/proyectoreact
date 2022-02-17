import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    return(
        <React.Fragment>
            <ItemList/>
            <ItemCount/>
        </React.Fragment>
    )
}

export default ItemListContainer;