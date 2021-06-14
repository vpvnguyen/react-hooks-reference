import React from "react";
import MyContext from "./MyContext";
import Car from "./Car";

const Cars = ({ cars, incrementPrice, decrementPrice }) => (
  <MyContext.Consumer>
    {(context) => (
      <>
        <h4>Cars:</h4>
        {Object.keys(context.cars).map((carID) => (
          <Car
            key={carID}
            name={cars[carID].name}
            price={cars[carID].price}
            incrementPrice={() => context.incrementPrice(carID)}
            decrementPrice={() => context.decrementPrice(carID)}
          />
        ))}
      </>
    )}
  </MyContext.Consumer>
);

export default Cars;
