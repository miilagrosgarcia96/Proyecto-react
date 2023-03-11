import CartWidget from "./CartWiget";
import "./NavBar.css";

function NavItem( {nombre, categoria} ) {
  return (
      <li className="nav-item">
        <ul className="nav-link" to={categoria}>
          {nombre}
        </ul>
      </li>
  );
} 


  function NavBar() {
    return (
      <nav className="nav-header">
        <img src="../imgs/logo.jpeg" width="100" alt="Logo EL mate DK"></img>
        
        <ul className="nav-menu">
        <NavItem nombre="Contacto" categoria=""/>
        <NavItem nombre="Productos" categoria=""/>
        <NavItem nombre="Log in" categoria=""/>
          <CartWidget />
        </ul>
      </nav>
    );
  }
  
  export default NavBar;