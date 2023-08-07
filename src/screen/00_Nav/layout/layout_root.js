import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import "./style.css";
import LayoutHeader from "./layout_header";
import LayoutFooter from "./layout_footer";

const LayoutRoot = () => {
  // -------------------------- VAR --------------------------
  // -------------------------- STATE --------------------------
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------
  // -------------------------- EFFECT --------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Layout className="layout main root">
        <LayoutHeader />
        <Outlet />
    </Layout>
  );
};

export default LayoutRoot;
