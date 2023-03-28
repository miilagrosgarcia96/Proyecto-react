import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="nav-header">
      <ul className="nav-menu">
        <Link to="/">
        <img src="../imgs/logo.jpeg" width="100" alt="Logo EL mate DK"></img>
        </Link>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category/Bombilla">Bombilla</Link>
        </li>
        <li>
          <Link to="/category/Yerba">Yerba</Link>
        </li>
        <li>
          <Link to="/category/Mate">Mate</Link>
        </li>
        <li>
          <Link to="/Nosotros">Nosotros</Link>
        </li>

        <div>
          <CartWidget/>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;