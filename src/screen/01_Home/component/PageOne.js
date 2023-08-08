import React from "react";
import { Button, Col, Layout, Row, Typography } from "antd";
import logo from "../../../config/img/logo.png";

//outsource

const PageOne = () => {
  // -------------------------- VAR -----------------------------
  // -------------------------- STATE ---------------------------
  // -------------------------- REDUX ---------------------------
  // -------------------------- FUNCTION ------------------------
  // -------------------------- EFFECT --------------------------
  // -------------------------- RENDER --------------------------
  const renderLogo = () => {
    return (
      <img
        style={{
          padding: "0 100px",
        }}
        src={logo}
        alt="logo"
      />
    );
  };

  const renderIntro = () => {
    return (
      <>
        <Typography
          style={{ color: "white", fontSize: "20px", fontWeight: "lighter" }}
        >
          A comprehensive lifeskill platform providing personalised education{" "}
          <br />
          and developing active learing with real-life simulations game
        </Typography>
      </>
    );
  };

  const renderBtn = () => {
    return (
      <>
        <Button className="enroll-btn">Enroll Now</Button>
      </>
    );
  };
  // -------------------------- MAIN ----------------------------
  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
        xxl={24}
        style={{ textAlign: "center", height: "40%" }}
      >
        {renderLogo()}
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
        xxl={24}
        style={{ textAlign: "center", height: "25%" }}
      >
        {renderIntro()}
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
        xxl={24}
        style={{ textAlign: "center", height: "25%" }}
      >
        {renderBtn()}
      </Col>
    </Row>
  );
};

export default PageOne;
