import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import logo from "../../../config/img/logo.png";

//outsource

const PageOne = () => {
  // -------------------------- VAR -----------------------------
  // -------------------------- STATE ---------------------------
  // -------------------------- REDUX ---------------------------
  // -------------------------- FUNCTION ------------------------
  // -------------------------- EFFECT --------------------------
  // -------------------------- RENDER --------------------------
  // -------------------------- MAIN ----------------------------
  return (
    <Col span={12} offset={4}>
      <img
        style={{ padding: "20px", width: "100%", height: "auto" }}
        src={logo}
        alt="logo"
      />
    </Col>
  );
};

export default PageOne;
