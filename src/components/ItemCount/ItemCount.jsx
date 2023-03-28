import React, { useState } from "react";

export default function ItemCount(props) {
  const [count, setCount] = useState(0);

const stock = 20;

  function handleAdd(){
    if( count < props.stock){
        setCount(count +1)
    }
}

  function handleSubstract(){
    if( count > 0){
        setCount(count -1)
    }
}

  return (
    <div>
      <button onClick={handleSubstract}>-</button>
      <span> {count} </span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}