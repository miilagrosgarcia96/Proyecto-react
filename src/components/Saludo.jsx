import Button from "./Button/button";

function Saludo(props) {
  const styleSaludo = {
    marginTop: "50px",
    fontSize: "60px",
  };

  return (
    <div style={styleSaludo}>
      {props.texto}
    <Button color="darkblue" text="ver más" />
    </div>
  );
}

export default Saludo;