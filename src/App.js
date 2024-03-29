import "./resources/css/app.css";
import { SubBar } from "./components/subBar";
import { ItemListContainer } from "./components/itemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartDetailContainer } from "./components/cartDetailContainer";
import { CartProvider } from "./context/cartContext";
import { exportData } from "./utils/firebase";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="container p-5">
        <SubBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cartDetail" element={<CartDetailContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/:gender/:category" element={<ItemListContainer />} />
          <Route path="/:gender" element={<ItemListContainer />} />
        </Routes>

        <footer className='bg-dark p-5 m-5 text-light text-center'>
                Todos los derechos reservados 
            </footer>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
