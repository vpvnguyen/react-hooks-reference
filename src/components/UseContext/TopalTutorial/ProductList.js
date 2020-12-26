import React from "react";
import Cars from "./Cars";

const ProductList = ({ cars, incrementCarPrice, decrementCarPrice }) => (
  <div>
    <h2>Product list:</h2>
    <Cars
      cars={cars}
      incrementCarPrice={incrementCarPrice}
      decrementCarPrice={decrementCarPrice}
    />
  </div>
);

export default ProductList;
