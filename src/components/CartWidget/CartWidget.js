import './CartWidget.css'
import ShopImg from '../../Assets/carrito.png'

const CartWidget = () => {
    return(
        <div className="shopItems">
            <img className="shopButton" src={ShopImg} alt="Shop Image"/>
            <div className="itemCounter">2</div>
        </div>
    )
}

export default CartWidget