import './CartWidget.css'
import ShopImg from '../../Assets/carrito.png'

const CartWidget = () => {

    
    return(
        <div className="shopItems">
            <img className="shopButton" src={ShopImg} alt="ShopImage"/>
            <div className="itemCounter">0</div>
        </div>
    )
}

export default CartWidget