import React from "react";
import { Navigate } from "react-router-dom";

const AuthWorker = ({ children }) => {
  let token = localStorage.getItem("token_worker");

  if (!token) {
    return <Navigate to="/loginWorker" replace="true" />;
  }
  return children;
};

export default AuthWorker;
