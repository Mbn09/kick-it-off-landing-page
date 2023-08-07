import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Drawer, Button, Grid, Select } from "antd";
import { FiMenu } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutMenu from "./layout_menu";

// component
import { FaUser } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";

const { Option } = Select;
const { useBreakpoint } = Grid;

const LayoutHeader = () => {
  // -------------------------- VAR --------------------------
  // -------------------------- STATE --------------------------
  const [drawer, setDrawer] = useState(false);
  const [lang, setLang] = useState("en");
  const screens = useBreakpoint();
  const location = useLocation();
  const navigate = useNavigate();
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };
  // -------------------------- EFFECT --------------------------
  // -------------------------- RENDER --------------------------

  const mobileButton = () => {
    return (
      <Button
        shape="default"
        onClick={() => toggleDrawer()}
        style={{ padding: 6, borderRadius: 5 }}
      >
        <FiMenu style={{ fontSize: 25 }} />
      </Button>
    );
  };

  const mobileDrawer = () => {
    return (
      <Drawer
        placement="left"
        closable={false}
        onClose={() => closeDrawer()}
        visible={drawer}
        className="drawer-container"
        style={{ width: 250 }}
      >
        <LayoutMenu mode="inline" />
      </Drawer>
    );
  };

  const renderMenu = () => {
    return (
      <Row justify="center" align="middle" className="menu-bar">
        <Col span={6}>
          <Button className="menu-item" type="text">
            About Us
          </Button>
        </Col>
        <Col span={6}>
          <Button className="menu-item" type="text">
            Mentee Training
          </Button>
        </Col>
        <Col span={6}>
          <Button className="menu-item" type="text">
            Mentor Hub
          </Button>
        </Col>
        <Col span={6}>
          <Button className="menu-item" type="text">
            Community
          </Button>
        </Col>
      </Row>
    );
  };

  const buttonLogin = () => {
    return (
      <Button
        type="primary"
        size="large"
        style={{ borderRadius: "5px" }}
        icon={<FaUser style={{ marginRight: "10px", fontSize: "12px" }} />}
      >
        My account
      </Button>
    );
  };

  const languageSwitch = () => {
    return (
      <Button
        type="text"
        style={{ align: "middle", color: "white", fontSize: "20px" }}
      >
        Eng
        <BiDownArrow style={{ fontSize: "15px", marginLeft: "3px" }} />
      </Button>
    );
  };

  const renderDesktop = () => {
    return (
      <Row justify="space-between" align="middle">
        <Col flex="auto">{renderMenu()}</Col>
        <Col flex="150px">{buttonLogin()}</Col>
        <Col flex="50px">{languageSwitch()}</Col>
      </Row>
    );
  };

  const renderMobile = () => {
    return (
      <Row justify="space-between" align="middle">
        <Col flex="auto">{mobileButton()}</Col>
        <Col flex="none">{buttonLogin()}</Col>
        <Col flex="none">{languageSwitch()}</Col>
        {mobileDrawer()}
      </Row>
    );
  };
  // -------------------------- MAIN --------------------------
  return (
    <Layout.Header
      className="header-menu"
      style={{ background: "none", height: "80px" }}
    >
      {screens?.xl ? renderDesktop() : renderMobile()}
    </Layout.Header>
  );
};

export default LayoutHeader;
