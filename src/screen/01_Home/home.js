import React, { createRef, useEffect, useState } from "react";
import { Layout, Row, Grid, Col, Button } from "antd";

// outsource
import facebookLogo from "../../config/img/facebook-icon.png";
import instaLogo from "../../config/img/insta-icon.png";
import tiktokLogo from "../../config/img/tiktok-icon.png";
import { BsStars } from "react-icons/bs";
import HomePage from "./component/HomePage";

// style
import "./home.css";
import DotsList from "../../component/dots_list";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const HomeScreen = () => {
  // -------------------------- VAR -----------------------------
  const screens = useBreakpoint();
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
  };
  const data = ["1", "2", "3", "4", "5", "6"];
  const carouselRef = createRef();
  // -------------------------- STATE --------------------------
  const [mobile, setMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  // -------------------------- REDUX ---------------------------
  // -------------------------- FUNCTION ------------------------
  // -------------------------- EFFECT --------------------------
  useEffect(() => {
    if (screens?.xs) {
      setMobile(true);
    }
    if (screens?.sm) {
      setMobile(true);
    }
    if (screens?.md) {
      setMobile(true);
    }
    if (screens?.lg) {
      setMobile(false);
    }
    if (screens?.xl) {
      setMobile(false);
    }
    if (screens?.xxl) {
      setMobile(false);
    }
  }, [screens]);

  // -------------------------- RENDER --------------------------
  const renderHomePage = () => {
    return <HomePage />;
  };

  const renderBody = () => {
    return <Row>{renderHomePage()}</Row>;
  };

  const renderLeft = () => {
    return (
      <>
        <Row style={{ height: "30%" }}></Row>
        <Row gutter={[0, 24]}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            style={{ textAlign: "center" }}
          >
            <Button
              shape="circle"
              size="large"
              icon={<BsStars style={{ color: "white", fontSize: "25px" }} />}
              style={buttonStyle}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            style={{ textAlign: "center" }}
          >
            <Button
              shape="circle"
              size="large"
              icon={<img src={facebookLogo} alt="Button Icon" />}
              style={buttonStyle}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            style={{ textAlign: "center" }}
          >
            <Button
              shape="circle"
              size="large"
              icon={<img src={instaLogo} alt="Button Icon" />}
              style={buttonStyle}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            style={{ textAlign: "center" }}
          >
            <Button
              shape="circle"
              size="large"
              icon={<img src={tiktokLogo} alt="Button Icon" />}
              style={buttonStyle}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            style={{ textAlign: "center" }}
          >
            <Button
              shape="circle"
              size="large"
              icon={<BsStars style={{ color: "white", fontSize: "25px" }} />}
              style={buttonStyle}
            />
          </Col>
        </Row>
        <Row style={{ height: "30%" }}></Row>
      </>
    );
  };

  const renderRight = () => {
    return (
      <>
        <Row style={{ height: "35%" }}></Row>
        <Row style={{ height: "30%" }}>
          <Col span={12} offset={12}
          >
            <DotsList data={data} dotRef={carouselRef} current={currentSlide} />
          </Col>
        </Row>
        <Row style={{ height: "35%" }}></Row>
      </>
    );
  };
  // -------------------------- MAIN ----------------------------
  return (
    <Layout className="full">
      <Content className="home-content">
        <Row gutter={[0]}>
          <Col xs={3} sm={3} md={3} lg={3} xl={2} xxl={2}>
            {renderLeft()}
          </Col>
          <Col xs={18} sm={18} md={18} lg={18} xl={19} xxl={19}>
            {renderBody()}
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            {renderRight()}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HomeScreen;
