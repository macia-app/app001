import logo from '../../Assets/icono.jpg'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
      <nav className="NavBar">
          <div className="logoimg">
              <img src={logo} alt="Logo" />
          </div>
          <div className="ul-list">
            <ul className="list-items">
              <li className="item-nav">Carretera</li>
              <li className="item-nav">Montaña</li>
              <li className="item-nav">Paseo</li>
              <li className="item-nav">Eléctrica</li>
             
              <CartWidget />
            </ul>
          </div>
      </nav>
    )
  }

  export default Navbar;