import React, { useState,} from 'react'

export default function ItemCount({stock , initial}) {

    const [itemCount, setItemCount] = useState(0)

    const addItem = () => {
        if(itemCount < stock){
            setItemCount(itemCount + 1)
        }
        
    }
    const removeItem = () => {
        if(itemCount > 0){
            setItemCount(itemCount - 1)
        }
        
    }
    return (
        <div>
            <h1>{itemCount}</h1>

            <button onClick={removeItem}>-</button>
            <button onClick={addItem}>+</button>
            <br/>
            <button>Agregar al carrito</button>
        </div>
    )
}