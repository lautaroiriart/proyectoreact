import { useEffect, useState } from "react";
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';


const ItemList= ()=> {
    
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: '1',
            nombre:'Vela con aroma a citricos',
            precio: 1000,
            stock:2,
            pictureUrl: 'dada'
        },
        {
            id: '2',
            nombre:'Vela con aroma a mango',
            precio: 400,
            stock: 10,
            pictureUrl: '21'
        },
        {
            id: '3',
            nombre:'Vela con aroma a cereza',
            precio: 500,
            stock: 1,
            pictureUrl: 'sa'
        }
    ]

    const getProducts = new Promise ((resolve, reject) =>{
        setTimeout( () => {
            resolve(dataProducts)
        }, 2000)
    })
    
    useEffect( () => {
        getProducts.then((data) => {
            setProducts (data)
            setLoader(false)
        })
    }, [])
    return(
        <div>
        <h2>Productos destacados</h2>
        {
            loader && <CircularProgress/> 
        }
            {products.map( (product) => {
                return(

                    <div >  
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid key={product.id} item xs={6}>
                                    <Item  nombre={product.nombre} precio={product.precio} stock={product.stock} pictureUrl={product.pictureUrl}/>
                                    <ItemCount stock={product.stock}/>
                            </Grid>
                        </Grid>
                    </div>

                )
            })}
        </div>

    )
}

export default ItemList;