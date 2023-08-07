import React from "react";
import { Route } from "react-router-dom";
import { URL } from "./url";
import LayoutRoot from "./layout/layout_root";

import HomeScreen from "../01_Home/home";

const RoutePublict = () => {
  // -------------------------- VAR --------------------------
  // const language = "/:language";
  // -------------------------- STATE --------------------------
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------

  // -------------------------- EFFECT --------------------------

  // -------------------------- RENDER --------------------------

  // -------------------------- MAIN --------------------------
  return (
    <Route exact path={URL.home} element={<LayoutRoot />}>
      <Route index element={<HomeScreen />} />
      <Route element={<HomeScreen />} />
    </Route>
  );
};

export default RoutePublict;
