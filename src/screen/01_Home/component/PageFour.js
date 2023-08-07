import React from "react";
import { Col, Typography } from "antd";
import logo from "../../../config/img/logo.png";

//outsource

const PageFour = () => {
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

export default PageFour;