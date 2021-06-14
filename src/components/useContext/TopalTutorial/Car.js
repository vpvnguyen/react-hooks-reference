import React from "react";

const Car = ({ name, price, incrementPrice, decrementPrice }) => (
  <>
    <p>Name: {name}</p>
    <p>Price: {price}</p>
    <button onClick={incrementPrice}>Increment Price</button>
    <button onClick={decrementPrice}>Decrement Price</button>
  </>
);

export default Car;
