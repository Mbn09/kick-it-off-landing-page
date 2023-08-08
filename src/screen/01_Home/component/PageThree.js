import React from "react";
import { Button, Col, Image, Layout, Row, Typography } from "antd";

//outsource
import image01 from "../../../config/img/head-icon.png"
import image02 from "../../../config/img/heart-icon.png"
import image03 from "../../../config/img/hands-icon.png"
import image04 from "../../../config/img/health-icon.png"

const PageThree = () => {
  // -------------------------- VAR -----------------------------
  // -------------------------- STATE ---------------------------
  // -------------------------- REDUX ---------------------------
  // -------------------------- FUNCTION ------------------------
  // -------------------------- EFFECT --------------------------
  // -------------------------- RENDER --------------------------
  const renderLeft = () => {
    return (
      <>
        <Row>
          <Typography className="page03-intro">
            Let's <br />
            <span style={{ color: "#FFD76E" }}>KICK-IT-OFF</span>
            <br/>theoretical 
            <br/>lesson
            <br/> for a while!
          </Typography>
        </Row>
      </>
    );
  };

  const renderRight = () => {
    return (
      <Row>
        <Col xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={6}
        xxl={6}>
          {/* <Image width={70} src={image01}/> */}
        </Col>
        <Col xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={6}
        xxl={6}></Col>
        <Col xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={6}
        xxl={6}></Col>
        <Col xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={6}
        xxl={6}></Col>
      </Row>
    )
  };
  // -------------------------- MAIN ----------------------------
  return (
    <Row className="page03-content">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={8}
        xxl={8}
        style={{ textAlign: "left", height: "40%" }}
      >
        {renderLeft()}
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={16}
        xxl={16}
        style={{ textAlign: "center", height: "25%" }}
      >
        {renderRight()}
      </Col>
    </Row>
  );
};

export default PageThree;
