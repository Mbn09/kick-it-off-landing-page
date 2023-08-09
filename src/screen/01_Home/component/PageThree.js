import React from "react";
import { Button, Col, Image, Layout, Row, Typography } from "antd";

//outsource
import image01 from "../../../config/img/head-icon.png";
import image02 from "../../../config/img/heart-icon.png";
import image03 from "../../../config/img/hands-icon.png";
import image04 from "../../../config/img/health-icon.png";

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
            <br />
            theoretical
            <br />
            lesson
            <br /> for a while!
          </Typography>
        </Row>
      </>
    );
  };

  const renderRight = () => {
    return (
      <>
        <Row style={{ height: "100%" }}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={6}
            xxl={6}
            className="page03-head"
          >
            <Row
              className="page03-right-content-border"
              style={{ padding: "30px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={55} src={image01} />
              </Col>
            </Row>
            <Row className="page03-right-content-border">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content">
                  QUAlITY <br /> mentors
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover">
                  KIO mentors who have <br /> passed the rigorous <br />
                  verification process and <br /> the KIO program would <br />{" "}
                  be recommended based <br /> on your personality, <br /> skill
                  and interest. The <br /> KIO program <br /> accompanies you{" "}
                  <br />
                  through your career <br /> challenges and <br />{" "}
                  opportunities.
                </Typography>
              </Col>
            </Row>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={6}
            xxl={6}
            className="page03-head"
          >
            <Row
              className="page03-right-content-border"
              style={{ padding: "39px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={70} src={image02} />
              </Col>
            </Row>
            <Row className="page03-right-content-border">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content">
                  1:1 DEDICATED <br />
                  mentor
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover">
                  KIO mentors who have <br /> passed the rigorous <br />
                  verification process and <br /> the KIO program would <br />{" "}
                  be recommended based <br /> on your personality, <br /> skill
                  and interest. The <br /> KIO program <br /> accompanies you{" "}
                  <br />
                  through your career <br /> challenges and <br />{" "}
                  opportunities.
                </Typography>
              </Col>
            </Row>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={6}
            xxl={6}
            className="page03-head"
          >
            <Row
              className="page03-right-content-border"
              style={{ padding: "30px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={55} src={image03} />
              </Col>
            </Row>
            <Row className="page03-right-content-border">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content">
                  GAMIFICATION <br />
                  journey
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover">
                  KIO mentors who have <br /> passed the rigorous <br />
                  verification process and <br /> the KIO program would <br />{" "}
                  be recommended based <br /> on your personality, <br /> skill
                  and interest. The <br /> KIO program <br /> accompanies you{" "}
                  <br />
                  through your career <br /> challenges and <br />{" "}
                  opportunities.
                </Typography>
              </Col>
            </Row>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={6}
            xxl={6}
            className="page03-head"
          >
            <Row
              className="page03-right-content-border"
              style={{ padding: "30px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={67} src={image04} />
              </Col>
            </Row>
            <Row className="page03-right-content-border">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content">
                  EVERY KIND <br />
                  of learning
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover">
                  KIO mentors who have <br /> passed the rigorous <br />
                  verification process and <br /> the KIO program would <br />{" "}
                  be recommended based <br /> on your personality, <br /> skill
                  and interest. The <br /> KIO program <br /> accompanies you{" "}
                  <br />
                  through your career <br /> challenges and <br />{" "}
                  opportunities.
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  };
  // -------------------------- MAIN ----------------------------
  return (
    <Row style={{ heght: "100%" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Row className="page03-content">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={6}
            xxl={6}
            style={{ textAlign: "left" }}
          >
            {renderLeft()}
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={18}
            xxl={18}
            style={{
              textAlign: "center",
              padding: "10px 40px 10px 0",
            }}
          >
            {renderRight()}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PageThree;
