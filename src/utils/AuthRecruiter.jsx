import React from "react";
import { Navigate } from "react-router-dom";

const AuthRecruiter = ({ children }) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJhbmkiLCJlbWFpbCI6InJhbmlAZ21haWwuY29tIiwicGhvbmUiOiI4MTIzMTIzMTIiLCJwaG90byI6bnVsbCwicGhvdG9faWQiOm51bGwsInZhbGlkYXRlIjpudWxsLCJpc19hY3RpdmUiOmZhbHNlLCJqb2JkZXNrIjpudWxsLCJhZGRyZXNzIjpudWxsLCJvZmZpY2UiOm51bGwsImRlc2NyaXB0aW9uIjpudWxsLCJpYXQiOjE2OTI1OTQyNjZ9.Kctw7g8_zkLfjyhCMUCG3fFR13JMMaweDkfyFm1HhzU";
  localStorage.getItem("token_recruiter");

  if (!token) {
    return <Navigate to="/loginRecruiter" replace="true" />;
  }
  return children;
};

export default AuthRecruiter;
