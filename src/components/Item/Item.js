const Item = ({id,nombre,precio,stock}) => {
    return(
        <div>
            <p>ID: {id} </p>
            <p>Nombre: {nombre}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default Item;