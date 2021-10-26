import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/Contacto";
import Shop from "../../pages/Shop";
import Detail from "../../pages/Detail";
import Products from "../../pages/Products";
import Error404 from "../../pages/Error404";

const RoutesNavBar = () => {
  return (
    <Switch>
      <Route path="/detalles/:id">
        <Detail />
      </Route>
      <Route path="/carrito">
        <Shop />
      </Route>
      <Route path="/contacto">
        <About />
      </Route>
      <Route path="/productos">
        <Products />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  );
};

export default RoutesNavBar;