import React from "react";
import { Col, Row, Typography } from "antd";

//outsource

const PageTwo = () => {
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
          <Typography className="intro-title">
            Hi, welcome to <br />
            <span style={{ color: "#00F8AA" }}>KICK-IT-OFF</span>
          </Typography>
        </Row>
        <Row>
          <Typography className="intro-body">
            KICK-IT-OFF offers a comprehensive <br /> solution for young people
            who are <br /> struggling with challenges in life, including <br />{" "}
            a 1:1 mentoring program for people to learn
            <br /> and grow in their personal and professional <br />
            development. As mentees can learn form <br /> the experience and
            advice of their mentors, <br /> who can guid them through their
            career
            <br /> challenges and opportunities, they can <br /> improve their
            skills, knowledge and <br /> condidence as weel as their
            productivity <br /> and performance.
          </Typography>
        </Row>
      </>
    );
  };

  const renderRight = () => {
    return (
      <>
        <Row gutter={[48, 24]}>
          <Col span={12}>
            <Typography
              className="page02-static"
              style={{ color: "#FFD76E", border: "2px solid #FFD76E" }}
            >
              +50
              <br />
              <Typography className="page02-static-note">
                Number of <br/> registered mentees
              </Typography>
            </Typography>
          </Col>

          <Col span={12}>
            <Typography className="page02-static"
              style={{ color: "#FD20FE", border: "2px solid #FD20FE" }}>
              +10
              <br />
              <Typography className="page02-static-note">
                Number of <br /> professional mentors
              </Typography>
            </Typography>
          </Col>

          <Col span={12}>
            <Typography className="page02-static"
              style={{ color: "#00F8AA", border: "2px solid #00F8AA" }}>
              89%
              <br />
              <Typography className="page02-static-note">
                Mentees would <br /> recommend KIO
              </Typography>
            </Typography>
          </Col>
          <Col span={12}>
            <Typography className="page02-static"
              style={{ color: "#ED523E", border: "2px solid #ED523E" }}>
              1st
              <br />
              <Typography className="page02-static-note">
                Comprehensive platform <br /> combining interactive <br /> video
                game in VietNam
              </Typography>
            </Typography>
          </Col>
        </Row>
      </>
    );
  };
  // -------------------------- MAIN ----------------------------
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={10} xxl={10}>
        {renderLeft()}
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={14} xxl={14}>
        {renderRight()}
      </Col>
    </Row>
  );
};

export default PageTwo;
