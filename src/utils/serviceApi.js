import axios from "axios";
let url = import.meta.env.VITE_BASE_URL;
let token = localStorage.getItem("token_recruiter") || localStorage.getItem("token_worker");
const instance = axios.create({
  baseURL: `${url}`,
  headers: { Authorization: "Bearer " + token },
});

export { instance };
