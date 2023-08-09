import React from "react";
import { Button, Col, Image, Row, Typography } from "antd";
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
    return <Image width={"60%"} src={logo} alt="logo" />;
  };

  const renderIntro = () => {
    return (
      <Typography
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "lighter",
          margin: "10px 0"
        }}
      >
        A comprehensive lifeskill platform providing personalised education
        <br />
        and developing active learing with real-life simulation games
      </Typography>
    );
  };

  const renderBtn = () => {
    return <Button className="enroll-btn">Enroll Now</Button>;
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
        style={{
          textAlign: "center",
        }}
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
        style={{
          textAlign: "center",
        }}
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
        style={{
          textAlign: "center",
        }}
      >
        {renderBtn()}
      </Col>
    </Row>
  );
};

export default PageOne;
