import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
const handleOnadd = (cont) => {
    return(
        console.log('Se agregó al carrito ' + cont + ' producto/s')
    )
}


    return(
        <>
            <h1 className='centrar'>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={handleOnadd}/>
        </>
    )
}

export default ItemListContainer