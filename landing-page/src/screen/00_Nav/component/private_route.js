import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { URL } from "../url";
import { isLoggedSelector } from "../../../store/auth/auth.selector";
import LoadingGif from "../../../asset/img/loading.gif";

const PrivateRoute = ({ children }) => {
  const logged = useSelector(isLoggedSelector);
  let location = useLocation();
  if (logged === null) {
    return (
      <div className="center loading">
        <img src={LoadingGif} alt="Loading... " />
      </div>
    );
  }
  return logged ? children : <Navigate to={URL.home} exact state={{ from: location }} replace />;
};

export default PrivateRoute;
