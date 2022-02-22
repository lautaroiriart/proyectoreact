import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetails/ItemDetails';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([])
    const dataProduct =
        {
            id: '1',
            nombre:'Vela samira',
            precio: 1000,
            stock:2,
            img: 'vela2.jpg' ,
            detail: 'Vela de forma cuadrada, con olor a citricos'
        }

    const getProduct = new Promise ((resolve, reject) =>{
        setTimeout( () => {
            resolve(dataProduct)
        }, 2000)
    })
    
    useEffect( () => {
        getProduct.then(data => {
            setProduct (data)
        })
    }, [])

    return (
        <div className='ItemDetail'>
                 <ItemDetail data={product}/>
        </div>
    )
}