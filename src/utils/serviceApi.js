import axios from "axios";
let url = import.meta.env.VITE_BASE_URL;
// let token = localStorage.getItem("token_recruiter") || localStorage.getItem("token_worker");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkthbmNpbCIsImVtYWlsIjoia2FuY2lsQGdtYWlsLmNvbSIsInBob25lIjoiMTIzMTIzMTIzIiwiY29tcGFueV9uYW1lIjoiUFQuIEthbmNpbCIsInBvc2l0aW9uIjoiSFJEIiwicGhvdG8iOm51bGwsInBob3RvX2lkIjpudWxsLCJ2YWxpZGF0ZSI6bnVsbCwiaXNfYWN0aXZlIjpmYWxzZSwic2VjdG9yIjpudWxsLCJwcm92aW5jZSI6bnVsbCwiY2l0eSI6bnVsbCwiZGVzY3JpcHRpb24iOm51bGwsImVtYWlsX2hyZCI6bnVsbCwiZW1haWxfY29ycCI6bnVsbCwibGlua2VkaW4iOm51bGwsImlhdCI6MTY5MjU4NjI0N30.X03wgR-pgk7TASw46HkbtqrVY8MIxKxGUUGyMw7c_2E";
const instance = axios.create({
  baseURL: `${url}`,
  headers: { Authorization: "Bearer " + token },
});

export { instance };
