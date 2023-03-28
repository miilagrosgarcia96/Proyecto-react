
import './NavBar.css';

function CartWidget () {
    return (
        <ul className="link-carrito" to="/">
            <img src="../imgs/shopping-cart.png" width="40" height="30"
                            alt="iconocarritodecompra"></img>
        </ul>
    );
}

export default CartWidget;