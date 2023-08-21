import axios from "axios";
let url = import.meta.env.VITE_BASE_URL;
let token = localStorage.getItem("token_recruiter") || localStorage.getItem("token_worker");
const instance = axios.create({
  baseURL: `${url}`,
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InJhbmkiLCJlbWFpbCI6InJhbmlAZ21haWwuY29tIiwicGhvbmUiOiI4MTIzMTIzMTIiLCJwaG90byI6bnVsbCwicGhvdG9faWQiOm51bGwsInZhbGlkYXRlIjpudWxsLCJpc19hY3RpdmUiOmZhbHNlLCJqb2JkZXNrIjpudWxsLCJhZGRyZXNzIjpudWxsLCJvZmZpY2UiOm51bGwsImRlc2NyaXB0aW9uIjpudWxsLCJpYXQiOjE2OTI1OTQyNjZ9.Kctw7g8_zkLfjyhCMUCG3fFR13JMMaweDkfyFm1HhzU",
  },
});

export { instance };
