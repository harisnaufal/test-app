import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { StoreProvider } from "./store/Store";

import "./index.css";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <Routes />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
