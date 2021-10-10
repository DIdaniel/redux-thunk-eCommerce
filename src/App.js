// https://www.youtube.com/watch?v=0W6i5LYKCSI

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product/:productId" component={ProductDetail} />
          <Route>404 NOT FOUNT!! 🦁</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
