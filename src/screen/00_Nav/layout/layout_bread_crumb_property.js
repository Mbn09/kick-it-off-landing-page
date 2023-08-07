import React from "react";
//outsource
import { Col, Breadcrumb } from "antd";

//components

const BreadCrumbPropery = ({ data }) => {
  // -------------------------- VAR --------------------------

  // -------------------------- STATE --------------------------

  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION -----------------------
  const handleClick = (href) => {
    const { origin } = window.location;
    const finalpath = origin + "/" + href;
    // console.log(finalpath);
    window.location = finalpath;
  };

  // -------------------------- EFFECT --------------------------

  // -------------------------- RENDER --------------------------

  // -------------------------- MAIN --------------------------
  return (
    <Col
      style={{ margin: "1rem" }}
      xs={24}
      sm={24}
      md={24}
      lg={24}
      xl={24}
      xxl={24}
      align="center"
    >
      <Breadcrumb>
        {data?.map((item) => (
          <Breadcrumb.Item key={item?.title}>
            <a
              onClick={() => {
                handleClick(item?.url);
              }}
            >
              {item?.title}
            </a>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </Col>
  );
};

export default BreadCrumbPropery;
