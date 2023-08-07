import React from "react";
import Router from "./screen/00_Nav/router";
import { ConfigProvider } from "antd";

ConfigProvider.config({
  theme: {
    primaryColor: "#0C2FDE",
  },
});

const App = () => {
  return (
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  );
};

export default App;
