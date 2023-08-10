import React, { useState } from "react";
import { Button, Col, Image, Layout, Row, Typography } from "antd";

//outsource
import image01 from "../../../config/img/head-icon.png";
import image02 from "../../../config/img/heart-icon.png";
import image03 from "../../../config/img/hands-icon.png";
import image04 from "../../../config/img/health-icon.png";

const PageThree = () => {
  // -------------------------- VAR -----------------------------
  // -------------------------- STATE ---------------------------
  const [isHovered01, setIsHovered01] = useState(false);
  const [isHovered02, setIsHovered02] = useState(false);
  const [isHovered03, setIsHovered03] = useState(false);
  const [isHovered04, setIsHovered04] = useState(false);
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
            className={`page03-head-img01 ${isHovered01 ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered01(true)}
            onMouseLeave={() => setIsHovered01(false)}
          >
            <Row
              className="page03-right-image-border-img01"
              style={{ padding: "30px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={55} src={image01} />
              </Col>
            </Row>
            <Row className="page03-right-content-border-img01">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content-img01">
                  QUALITY <br /> mentors
                </Typography>
              </Col>
            </Row>
            <Row className="page03-right-content-hover-border-img01">
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover-img01">
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
            className={`page03-head-img02 ${isHovered02 ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered02(true)}
            onMouseLeave={() => setIsHovered02(false)}
          >
            <Row
              className="page03-right-image-border-img02"
              style={{ padding: "39px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={70} src={image02} />
              </Col>
            </Row>
            <Row className="page03-right-content-border-img02">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content-img02">
                  1:1 DEDICATED <br />
                  mentor
                </Typography>
              </Col>
            </Row>
            <Row className="page03-right-content-hover-border-img02">
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover-img02">
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
            className={`page03-head-img03 ${isHovered03 ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered03(true)}
            onMouseLeave={() => setIsHovered03(false)}
          >
            <Row
              className="page03-right-image-border-img03"
              style={{ padding: "30px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={55} src={image03} />
              </Col>
            </Row>
            <Row className="page03-right-content-border-img03">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content-img03">
                  GAMIFICATION <br />
                  journey
                </Typography>
              </Col>
            </Row>
            <Row className="page03-right-content-hover-border-img03">
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover-img03">
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
            className={`page03-head-img04 ${isHovered04 ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered04(true)}
            onMouseLeave={() => setIsHovered04(false)}
          >
            <Row
              className="page03-right-image-border-img04"
              style={{ padding: "30px 0" }}
            >
              <Col span={12} offset={6}>
                <Image width={67} src={image04} />
              </Col>
            </Row>
            <Row className="page03-right-content-border-img04">
              <Col span={20} offset={2}>
                <Typography className="page03-right-content-img04">
                  EVERY KIND <br />
                  of learning
                </Typography>
              </Col>
            </Row>
            <Row className="page03-right-content-hover-border-img04">
              <Col span={18} offset={3}>
                <Typography className="page03-right-content-hover-img04">
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
