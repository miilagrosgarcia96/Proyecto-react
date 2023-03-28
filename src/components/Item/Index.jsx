import "./Item.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <Link to={`/detalle/${props.id}`}>
      <div className="item-card">
        <div className="item-card_header">
          <h3>{props.title}</h3>
        </div>
        <img src={props.img} className="item-card_img" alt="imagen" ></img>
        {/*<h4>$ {props.price}</h4> */}
        <div className="item-card_detail">
          <h4>$ {props.price}</h4>
          <small>{props.category}</small>
        </div>
        
        <small>{props.description}</small>

        <Button color="brown" text="Ver mas" />
      </div>
      </Link>
    );
  }
