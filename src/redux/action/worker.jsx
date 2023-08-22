import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { instance } from "../../utils/serviceApi";
let url = import.meta.env.VITE_BASE_URL;

export const register = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "WORKER_REGISTER_PENDING" });
    const result = await axios.post(url + `/register-worker`, data);
    console.log(result);
    dispatch({ payload: result.data.message, type: "WORKER_REGISTER_SUCCESS" });
    toast.success(result.data.message);
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "WORKER_REGISTER_FAILED" });
    console.log(err.response.data.message);
    toast.error(err.response.data.message);
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "WORKER_LOGIN_PENDING" });
    const result = await axios.post(url + `/login-worker`, data);
    localStorage.setItem("token_worker", result.data.data.token);
    localStorage.setItem("name_worker", result.data.data.name);
    localStorage.setItem("photo_worker", result.data.data.photo);
    localStorage.removeItem("token_recruiter");
    localStorage.removeItem("name_recruiter");
    localStorage.removeItem("photo_recruiter");
    // localStorage.setItem("email", result.data.user.email);
    dispatch({ payload: result.data.data, type: "WORKER_LOGIN_SUCCESS" });
    toast.success(result.data.message);
    setTimeout(() => {
      navigate("/editProfileWorker");
      window.location.reload();
    }, 1000);
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data, type: "WORKER_LOGIN_FAILED" });
    console.log(err);
    toast.error(err.response.data.message);
  }
};
export const updateProfileWorker = (data) => async (dispatch) => {
  try {
    dispatch({ type: "WORKER_UPDATE_PENDING" });
    const result = await instance.put(url + `/update-worker`, data);
    localStorage.setItem("photo_worker", result.data.data.photo);
    localStorage.setItem("name_worker", result.data.data.name);
    localStorage.setItem("email_worker", result.data.data.email);
    toast.success(result.data.message);
    getMyProfile();
    dispatch({ payload: result.data.message, type: "WORKER_UPDATE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "WORKER_UPDATE_FAILED" });
    console.log(err);
  }
};
export const deleteProfilUser = () => async (dispatch) => {
  try {
    dispatch({ type: "WORKER_DELETE_PENDING" });
    const result = await instance.delete(url + `/delete-worker`);
    toast.success(result.data.message);
    dispatch({ payload: result.data.message, type: "WORKER_DELETE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "WORKER_DELETE_FAILED" });
    console.log(err);
  }
};
export const getAllWorker = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_WORKER_PENDING" });
    const result = await instance.get(url + `/list-worker`);
    toast.success(result.data.message);
    dispatch({ payload: result.data, type: "GET_WORKER_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "GET_WORKER_FAILED" });
    console.log(err);
  }
};
export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "GETMY_PROFILE_PENDING" });
    const result = await instance.get(url + `/profileWorker`);
    toast.success(result.data.message);
    console.log(result.data.message);
    dispatch({ payload: result.data.data, type: "GETMY_PROFILE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "GETMY_PROFILE_FAILED" });
    console.log(err);
  }
};
export const getWorkerDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DETAIL_WORKER_PENDING" });
    const result = await axios.get(`${url}/list-worker/${id}`);
    dispatch({ payload: result.data.data, type: "DETAIL_WORKER_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.msg, type: "DETAIL_WORKER_FAILED" });
    console.log(err);
  }
};
