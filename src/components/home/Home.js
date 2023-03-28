import './Home.css';
import Button from "../Button/button"; 
import Flex from '../Flex/Flex';

function Home(props) {
    return (
        <Flex>
        <div className="item-card">
          <div className="item-card_header">
            <h3>{props.title}</h3>
          </div>
          <img src={props.img} className="item-card_img" alt="imagen"></img>
          {/*<h4>$ {props.price}</h4> */}
          <small>{props.description}</small>
          <Button color="brown" text="Ver mas" />
        </div>
        </Flex>
      );
    }

export default Home;