# React useContext Hook

Basic Car App using React useContext Hook  
https://www.toptal.com/react/react-context-api

## Initialize the Context

MyContext.js

```jsx
import React from "react";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const MyContext = React.createContext();

export default MyContext;
```

MyProvider.js

```jsx
import MyContext from "./MyContext";

class MyProvider extends Component {
  state = {
    cars: {
      car001: { name: "Honda", price: 100 },
      car002: { name: "BMW", price: 150 },
      car003: { name: "Mercedes", price: 200 },
    },
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          cars: this.state.cars,
          incrementPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState({
              cars,
            });
          },
          decrementPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState({
              cars,
            });
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
```

## Create the Provider
