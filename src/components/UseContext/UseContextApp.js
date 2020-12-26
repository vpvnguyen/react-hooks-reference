import React from "react";
import MyProvider from "./MyProvider";
import ProductList from "./ProductList";

const UseContextApp = () => (
  <MyProvider>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my web store</h1>
      </header>
      <ProductList />
    </div>
  </MyProvider>
);

export default UseContextApp;
