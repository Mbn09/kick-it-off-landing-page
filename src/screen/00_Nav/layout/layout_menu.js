import React from "react";
import { useParams } from "react-router-dom";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";
// import { useMenu } from "../../../hook/useMenu";

const LayoutMenu = (props) => {
  // -------------------------- VAR --------------------------
  const { mode } = props;
  // const { items, menu } = useMenu();
  const { Slug } = useParams();
  const location = useLocation();
  const pathname = location.pathname || "/";
  // let subkeys = ["1"];
  // const keys = Object.values(items)?.find((item) => item?.url === pathname)
  //   ?.hightlight || ["1"];

  // subkeys =
  //   pathname.includes("event") && Slug !== ""
  //     ? ["5"]
  //     : pathname.includes("post") && Slug !== ""
  //     ? ["3"]
  //     : keys;

  // -------------------------- STATE --------------------------
  // -------------------------- REDUX --------------------------
  // -------------------------- FUNCTION --------------------------
  // -------------------------- EFFECT --------------------------
  // -------------------------- RENDER --------------------------
  // -------------------------- MAIN --------------------------
  return (
    <Menu
      mode={mode || "horizontal"}
      // defaultSelectedKeys={keys}
      // selectedKeys={subkeys}
      // items={menu}
    />
  );
};

export default LayoutMenu;
