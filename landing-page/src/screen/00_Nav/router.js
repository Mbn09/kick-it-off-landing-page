import React, { useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// component
import RoutePublict from "./route_publict";
import RoutePrivate from "./route_private";
// redux

const Router = () => {
  // -------------------------- STATE --------------------------
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------
  // -------------------------- EFFECT --------------------------
  // -------------------------- MAIN --------------------------
  return (
    <BrowserRouter>
      <Routes>{RoutePublict()}</Routes>
    </BrowserRouter>
  );
};

export default Router;
