import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Button from "./button";

export default function CardComponentHooks(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <React.Fragment>
      <h3>contador: {count}</h3>
      {props.count2}
      <Button text="sumar" cuandohagoClick={() => setCount(count + 1)} />
      <Button text="restar" cuandohagoClick={() => setCount(count - 1)} />
    </React.Fragment>
  );
}
