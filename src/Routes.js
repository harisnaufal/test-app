import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Store } from "./store/Store";

// Style
import "./App.css";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import PurchaseHistory from "./pages/PurchaseHistory";
import SearchProduct from "./pages/SearchProduct";

const Routes = () => {
  const { state } = React.useContext(Store);
  if (state.isLogged) {
    return (
      <div className="mobile-web--container">
        <Route exact path="/" component={Dashboard} />
        <Route path="/product/detail" component={ProductDetail} />
        <Route path="/profile" component={PurchaseHistory} />
        <Route path="/product/search" component={SearchProduct} />
      </div>
    );
  }
  return (
    <React.Fragment>
      <Redirect to="/" />
      <Route path="/" component={Login} />
    </React.Fragment>
  );
};

export default Routes;
