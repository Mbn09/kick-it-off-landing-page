import React, { createRef, useEffect, useState } from "react";
import { Layout, Row, Grid, Col, Button, Carousel } from "antd";

// outsource
import facebookLogo from "../../config/img/facebook-icon.png";
import instaLogo from "../../config/img/insta-icon.png";
import tiktokLogo from "../../config/img/tiktok-icon.png";
import nextBtn from "../../config/img/next-button.png";
import { BsStars } from "react-icons/bs";
import PageOne from "./component/PageOne";

// style
import "./home.css";

// component
import DotsList from "../../component/dots_list";
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";
import PageFour from "./component/PageFour";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const HomeScreen = () => {
  // -------------------------- VAR -----------------------------
  const screens = useBreakpoint();
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
  };
  const data = [<PageOne />, <PageTwo />, <PageThree />, <PageFour />];
  const carouselRef = createRef();
  // -------------------------- STATE --------------------------
  const [mobile, setMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  // -------------------------- REDUX ---------------------------
  // -------------------------- FUNCTION ------------------------
  const onchange = (values) => {
    setCurrentSlide(values);
  };
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
  const renderBody = () => {
    return (
      <>
        <Carousel
          effect="scroll"
          dotPosition={"right"}
          draggable={true}
          dots={false}
          ref={carouselRef}
          afterChange={onchange}
        >
          {data.map((page) => (
            <Col span={22} offset={1} style={{ height: "100%", paddingTop: "100px" }}>
              <div>{page}</div>
            </Col>
          ))}
        </Carousel>

        <Row style={{ height: "auto" }}>
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
              onClick={() => carouselRef.current.next()}
              icon={<img src={nextBtn} alt="Button Icon" />}
              style={buttonStyle}
            />
          </Col>
        </Row>
      </>
    );
  };

  const renderLeft = () => {
    return (
      <>
        <Row style={{ height: "30%" }}></Row>
        <Row gutter={[0, 12]} style={{ height: "40%" }}>
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
              disabled
              icon={<BsStars style={{ color: "white", fontSize: "22px" }} />}
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
              size="medium"
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
              size="medium"
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
              size="medium"
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
              disabled
              icon={<BsStars style={{ color: "white", fontSize: "22px" }} />}
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
          <Col span={12} offset={6}>
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
        <Row className="banner">
          <Col xs={3} sm={3} md={3} lg={3} xl={2} xxl={2}>
            {renderLeft()}
          </Col>
          <Col xs={18} sm={18} md={18} lg={18} xl={20} xxl={20}>
            {renderBody()}
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={2} xxl={2}>
            {renderRight()}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default HomeScreen;
