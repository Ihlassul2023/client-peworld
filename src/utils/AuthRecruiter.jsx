import React from "react";
import { Navigate } from "react-router-dom";

const AuthRecruiter = ({ children }) => {
  let token = localStorage.getItem("token_recruiter");

  if (!token) {
    return <Navigate to="/loginRecruiter" replace="true" />;
  }
  return children;
};

export default AuthRecruiter;
