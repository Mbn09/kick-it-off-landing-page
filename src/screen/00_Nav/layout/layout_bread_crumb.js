import React from "react";
import { Breadcrumb, Typography, Col, Row } from "antd";
import { RightOutlined } from "@ant-design/icons";
const { Title } = Typography;

const LayoutBreadCrumb = (props) => {
  // -------------------------- VAR --------------------------
  const bgCover = props?.bg || "";
  const isDark = props?.dark || false;
  const isSubTitle = props?.subtitle || "";
  const position = props?.position || "center";
  const height = props?.height || 300;
  const resize = props?.resize;
  const isdetail = props?.isdetail || false;

  // -------------------------- STATE --------------------------

  // -------------------------- REDUX --------------------------

  // -------------------------- FUNCTION --------------------------
  const CoverBG = () => {
    if (bgCover !== "") {
      return {
        background: `url("${bgCover}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "100px 0px",
        textAlign: position,
        alignItem: "center",
        display: "flex",
        minHeight: `${height}px`,
      };
    }

    return;
  };

  const renderResizeTitle = () => {
    if (isdetail && !resize) {
      return { fontSize: "60px" };
    } else if (resize && isdetail) {
      return { fontSize: "30px" };
    }

    return null;
  };

  console.log(renderResizeTitle());
  // -------------------------- EFFECT --------------------------

  // -------------------------- RENDER --------------------------

  const renderTitle = () => {
    const length = props?.data?.length;
    if (length > 0) {
      const last = props?.data?.length > 0 ? props?.data?.length - 1 : 0;
      const item = props?.data[last];
      const title = item?.title || "";
      return (
        <Title style={renderResizeTitle()} strong={false}>
          {title}
        </Title>
      );
    }
  };

  const renderSubTitle = () => {
    return (
      <Row className="sub-title" align="center">
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <Title level={5}>{isSubTitle}</Title>
        </Col>
      </Row>
    );
  };

  const renderBreadCrumb = () => {
    return (
      <Breadcrumb className={"breadcrumb"} separator={<RightOutlined />}>
        {props?.data?.map((item) => {
          const title = item?.title || "";
          const url = item?.url || "#";
          return (
            <Breadcrumb.Item key={title}>
              {url ? (
                <a href={url} target="_self" rel="noopener noreferrer">
                  {title}
                </a>
              ) : (
                title
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  };

  // -------------------------- MAIN --------------------------
  return (
    <Row
      gutter={[30, 5]}
      className={
        isDark ? "page-header-container header-dark" : "page-header-container"
      }
      style={CoverBG()}
      align="center"
    >
      <Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={20}>
        <Col style={resize ? { marginTop: "-40px" } : null} span={24}>
          {renderTitle()}
        </Col>
        <Col span={24}>
          {isSubTitle !== "" || isdetail
            ? renderSubTitle()
            : renderBreadCrumb()}
        </Col>
      </Col>
    </Row>
  );
};

export default LayoutBreadCrumb;
