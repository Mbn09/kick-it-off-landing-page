/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useParams } from "react-router-dom";
import { Layout, BackTop, Row, Col, Button, Tooltip } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
// import qrImage from "../../../asset/img/hali-qr-1024x1024.jpg";
// import appStore from "../../../asset/img/appstore.png";
// import playStore from "../../../asset/img/playstore.png";
// import playStoreEn from "../../../asset/img/download-google-play-3.png";
// import appStoreEn from "../../../asset/img/download-appstore-2.png";

const { Content } = Layout;

const LayoutFooter = () => {
  // -------------------------- VAR --------------------------
  // const { t, i18n } = useTranslation("translation", { keyPrefix: "footer" });
  // const params = useParams();
  // const language = i18n.language;
  // -------------------------- STATE --------------------------

  // -------------------------- REDUX --------------------------

  // -------------------------- FUNCTION --------------------------

  // -------------------------- EFFECT --------------------------

  // const renderBody = () => {
  //   return (
  //     <Row justify="center" align="top" gutter={[48, 24]}>
  //       {renderCol01()}
  //       {renderCol02()}
  //       {renderCol03()}
  //       {renderCol04()}
  //     </Row>
  //   );
  // };

  // const renderCol01 = () => {
  //   return (
  //     <Col xs={24} sm={12} md={12} lg={6} xl={6}>
  //       <h5 className="footer-title">
  //         <IoLocationOutline className="footer-icon" />
  //         {t("addressVnTitle")}
  //       </h5>
  //       <p> {t("addressVnInfo")}</p>
  //       <h5 className="footer-title">
  //         <IoLocationOutline className="footer-icon" />
  //         {t("addressAuTitle")}
  //       </h5>
  //       <p>
  //         Suite 809, Level 8, 25 Restwell Street, Bankstown, 2200, Australia
  //       </p>
  //     </Col>
  //   );
  // };

  // const renderCol02 = () => {
  //   return (
  //     <Col xs={24} sm={12} md={12} lg={6} xl={6}>
  //       <h5 className="footer-title">{t("policy")}</h5>
  //       <ul className="menu">
  //         <li>
  //           <a
  //             title={t("privacy")}
  //             target="_blank"
  //             rel="noopener"
  //             href={"/policy.html"}
  //           >
  //             {t("privacy")}
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             title={t("userTerm")}
  //             target="_blank"
  //             rel="noopener"
  //             href={"/client-policy.html"}
  //           >
  //             {t("userTerm")}
  //           </a>
  //         </li>
  //         <li>
  //           <a
  //             title={t("partnerTerm")}
  //             target="_blank"
  //             rel="noopener"
  //             href={"/term.html"}
  //           >
  //             {t("partnerTerm")}
  //           </a>
  //         </li>
  //       </ul>
  //     </Col>
  //   );
  // };

  // const renderCol03 = () => {
  //   return (
  //     <Col xs={24} sm={12} md={12} lg={6} xl={6}>
  //       <h5 className="footer-title">HALI Australia</h5>
  //       <Row justify="space-between" align="middle" gutter={[16, 16]}>
  //         <Col xs={10} sm={10} md={10} lg={10} xl={10}>
  //           <img src="" alt="HALI Australia QR" />
  //         </Col>
  //         <Col xs={14} sm={14} md={14} lg={14} xl={14}>
  //           <Row justify="space-between" align="middle" gutter={[16, 16]}>
  //             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
  //               <a
  //                 href="https://apps.apple.com/us/app/hali-australia/id1582400731"
  //                 target="_blank"
  //                 alt="App Store"
  //               >
  //                 <img
  //                   src={language === "en" ? appStoreEn : appStore}
  //                   alt="App Store"
  //                   style={{ width: "100%", height: "45px" }}
  //                 />
  //               </a>
  //             </Col>
  //             <Col xs={24} sm={24} md={24} lg={24} xl={24}>
  //               <a
  //                 href="https://play.google.com/store/apps/details?id=com.haliaustralia.client"
  //                 target="_blank"
  //                 alt="Play Store"
  //               >
  //                 <img
  //                   src={language === "en" ? playStoreEn : playStore}
  //                   alt="Play Store"
  //                   style={{
  //                     width: "100%",
  //                     height: "45px",
  //                     borderRadius: "5px",
  //                   }}
  //                 />
  //               </a>
  //             </Col>
  //           </Row>
  //         </Col>
  //       </Row>
  //     </Col>
  //   );
  // };

  // const renderCol04 = () => {
  //   return (
  //     <Col xs={24} sm={12} md={12} lg={6} xl={6}>
  //       <h5 className="footer-title"> {t("connect")}</h5>
  //       <Row justify="space-between" align="middle" gutter={[16, 16]}>
  //         <Col
  //           xs={24}
  //           sm={24}
  //           md={24}
  //           lg={24}
  //           xl={24}
  //           style={{ textAlign: "center" }}
  //         >
  //           <Tooltip title="facebook">
  //             <Button
  //               type="link"
  //               href="https://fb.me/haliaustralia"
  //               target="_blank"
  //               icon={<FaFacebookF style={{ fontSize: 25, color: "#fff" }} />}
  //             />
  //           </Tooltip>
  //           <Tooltip title="messenger">
  //             <Button
  //               type="link"
  //               href="https://m.me/haliaustralia"
  //               target="_blank"
  //               icon={
  //                 <FaFacebookMessenger
  //                   style={{ fontSize: 25, color: "#fff" }}
  //                 />
  //               }
  //             />
  //           </Tooltip>
  //         </Col>
  //         <Col xs={24} sm={24} md={24} lg={24} xl={24}>
  //           <ul className="menu">
  //             <li>
  //               <a href="mailto:wecare@haliaustralia.com">
  //                 Email: wecare@haliaustralia.com
  //               </a>
  //             </li>
  //             <li>
  //               <a href="tel:1900888680">Hotline VN: 1900 888 680</a>
  //             </li>
  //             <li>
  //               <a href="tel:0290567688">Hotline AU: 0290 567 688</a>
  //             </li>
  //           </ul>
  //         </Col>
  //       </Row>
  //     </Col>
  //   );
  // };

  const renderBottom = () => {
    return (
      <Row justify="space-between" align="middle" className="bottom">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          style={{ textAlign: "center" }}
        >
          HALI Australia ©2022. All rights reserved.
        </Col>
      </Row>
    );
  };

  const renderBackToTop = () => {
    return (
      <BackTop>
        <div
          style={{
            height: 40,
            width: 40,
            lineHeight: "40px",
            borderRadius: 4,
            backgroundColor: "#086e7d",
            textAlign: "center",
            color: "#fff",
            fontSize: 17,
          }}
        >
          <ArrowUpOutlined />
        </div>
      </BackTop>
    );
  };

  // -------------------------- MAIN --------------------------
  return (
    <>
      <Layout.Footer>
        <Content className="content">
          {/* {renderBody()} */}
          {renderBottom()}
        </Content>
      </Layout.Footer>
      {renderBackToTop()}
    </>
  );
};

export default LayoutFooter;
