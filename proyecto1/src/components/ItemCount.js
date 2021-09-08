import React, { useState, } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h5>contador: {count}</h5>
      {props.count2}
      <Button variant="info" className= 'm-1' onClick={() => setCount(count + 1)}>Sumar</Button>
      <Button variant="info" className= 'm-1' onClick={() => setCount(count - 1)}>Restar</Button>
    </React.Fragment>
  );
}
