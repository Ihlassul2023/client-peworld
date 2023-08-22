import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../utils/serviceApi";
let url = import.meta.env.VITE_BASE_URL;

export const register = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "RECRUITER_REGISTER_PENDING" });
    const result = await axios.post(url + `/register-company`, data);
    console.log(result.data.data);
    dispatch({ payload: result.data.data, type: "RECRUITER_REGISTER_SUCCESS" });
    toast.success("Register success!");
    setTimeout(() => {
      navigate("/loginRecruiter");
      window.location.reload();
    }, 1000);
  } catch (err) {
    console.log("error");
    console.log(err);
    dispatch({ payload: err.response.data, type: "RECRUITER_REGISTER_FAILED" });
    toast.error(err.response.data.message);
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "RECRUITER_LOGIN_PENDING" });
    const result = await axios.post(url + `/login-company`, data);
    localStorage.setItem("token_recruiter", result.data.data.token);
    localStorage.setItem("name_recruiter", result.data.data.name);
    localStorage.setItem("photo_recruiter", result.data.data.photo);
    localStorage.removeItem("token_worker");
    localStorage.removeItem("name_worker");
    localStorage.removeItem("photo_worker");
    toast.success(result.data.message);
    setTimeout(() => {
      navigate("/home");
      window.location.reload();
    }, 1000);
    dispatch({ payload: result.data, type: "RECRUITER_LOGIN_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data, type: "RECRUITER_LOGIN_FAILED" });
    console.log(err);
  }
};
export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "GETMYRECRUITER_PROFILE_PENDING" });
    const result = await instance.get(url + `/my-company`);
    toast.success(result.data.message);
    dispatch({ payload: result.data.data, type: "GETMYRECRUITER_PROFILE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "GETMYRECRUITER_PROFILE_FAILED" });
    console.log(err);
  }
};
export const updateProfileRecruiter = (data) => async (dispatch) => {
  try {
    dispatch({ type: "RECRUITER_UPDATE_PENDING" });
    const result = await instance.put(url + `/update-company`, data);
    localStorage.setItem("photo", result.data.data.photo);
    localStorage.setItem("name", result.data.data.name);
    localStorage.setItem("email", result.data.data.email);
    toast.success(result.data.message);
    dispatch({ payload: result.data.message, type: "RECRUITER_UPDATE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "RECRUITER_UPDATE_FAILED" });
    console.log(err);
  }
};
export const deleteProfilUser = () => async (dispatch) => {
  try {
    dispatch({ type: "RECRUITER_DELETE_PENDING" });
    const result = await instance.delete(url + `/delete-company`);
    toast.success(result.data.message);
    dispatch({ payload: result.data.message, type: "RECRUITER_DELETE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "RECRUITER_DELETE_FAILED" });
    console.log(err);
  }
};
