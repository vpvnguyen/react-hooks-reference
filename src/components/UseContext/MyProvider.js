import React, { useState } from "react";
import MyContext from "./MyContext";

const initialCarsState = {
  car1: { name: "Honda", price: 100 },
  car2: { name: "BMW", price: 150 },
  car3: { name: "Toyota", price: 200 },
};

const MyProvider = ({ children }) => {
  const [cars, setCars] = useState(initialCarsState);

  return (
    <MyContext.Provider
      value={{
        cars: cars,
        incrementPrice: (selectedID) => {
          const cars = Object.assign({}, cars);

          cars[selectedID].price = cars[selectedID].price + 1;

          setCars(cars);
        },
        decrementPrice: (selectedID) => {
          const cars = Object.assign({}, cars);

          cars[selectedID].price = cars[selectedID].price - 1;

          setCars(cars);
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
