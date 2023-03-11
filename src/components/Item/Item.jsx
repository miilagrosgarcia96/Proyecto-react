import "./Item.css";
import Button from "../Button/button";

export default function Item(props) {
  return (
    <div className="item-card">
      <div className="item-card_header">
        <h3>{props.title}</h3>
      </div>
      <img src={props.img} className="item-card_img" alt="imagen"></img>
      {/*<h4>$ {props.price}</h4> */}
      <small>{props.description}</small>
      <Button color="brown" text="Ver mas" />
    </div>
  );
}