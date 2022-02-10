import './ItemCount.css'
import C1 from '../../Assets/c1.jpg'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    

    const decrement = () => {
        if (count > initial){
            setCount (count - 1)
        }
        
    }
    const increment = () => {
        
        if (count < stock){
            setCount (count + 1)
        }
        
    }
    return(
        <>
            <h3 className='titleCount'>Bicicleta de carretera</h3>
            <img className='imgCount' src={ C1 } alt='Bicicleta de carretera'/>
            <div className='buttonsCount'>
                <button className='buttonCount' onClick={ decrement }> - </button>
                <h3 className='countResolve'>{ count }</h3>
                <button className='buttonCount' onClick={ increment }> + </button>
            </div>
            <div className='addShopCount' onClick={ () =>onAdd(count)}>
                <p> Agregar al carrito </p>
            </div>
        </>
    )
}

export default ItemCount