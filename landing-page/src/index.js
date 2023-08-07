import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import {
//   initializeAppCheck,
//   ReCaptchaEnterpriseProvider,
// } from "firebase/app-check";
// import { getAnalytics } from "firebase/analytics";
import { configureStore } from "@reduxjs/toolkit";
import "antd/dist/antd.variable.min.css";
import "./index.css";
import rootReducers from "./store/root.reducer";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
