import "./button.css";

const Button = (props) => {
  function handleClick() {
    alert("agregaste al carrito");
  }

  const styleButton = {
    backgroundColor: props.color,
  };

  return (
    <button
      disabled={props.disabled}
      className="btn"
      style={styleButton}
      onClick={handleClick}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;