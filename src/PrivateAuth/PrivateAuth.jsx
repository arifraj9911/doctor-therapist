/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { AuthContext } from "../provider/AuthContext";

const PrivateAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center my-20">
        <GridLoader color="#FF9F66" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location?.pathname} to="/login" replace={true}></Navigate>
  );
};

export default PrivateAuth;
