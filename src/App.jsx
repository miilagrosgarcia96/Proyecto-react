
import './App.css';
import Saludo from "./components/Saludo";
import Item from "./components/Item/Item";
import Flex from "./components/Flex/Flex";
import NavBar from "./components/Header/NavBar";



function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Saludo texto=" Contamos con una amplia selección de productos." />

          <Flex>
            <Item
              title="Mate"
             /* price=""*/
              description=""
              img="/imgs/mate.avif"
            />
            <Item
              title="Yerba"
             /* price=""*/
              description=""
              img="/imgs/yerba.jpeg"
            />
            <Item
              title="Bombilla"
             /* price=""*/
              description=""
              img="/imgs/bombilla.webp"
              otraProp="...."
              /*numero={1} */
            />
          </Flex>
        </header>
      </div>
    </div>
  );
}

export default App;
