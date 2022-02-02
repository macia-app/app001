
import './NavBar.css'


const Navbar = () => {
    return (
      <nav className="NavBar">
          <div className="logoimg">
              <a href="index.html"><img src="./images/icono.jpg" alt="Logo" /></a>
          </div>
          <div className="ul-list">
            <ul className="list-items">
              <li className="item-nav"><a href="#">Carretera</a></li>
              <li className="item-nav"><a href="#">Montaña</a></li>
              <li className="item-nav"><a href="#">Paseo</a></li>
              <li className="item-nav"><a href="#">Eléctrica</a></li>
             
              <li className="item-nav item-buy"><a href="#"><img src="./images/carrito.png" alt="Carrito compra" /></a></li>
            </ul>
          </div>
      </nav>
    )
  }

  export default Navbar;