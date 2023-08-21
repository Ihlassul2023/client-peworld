import { toast } from "react-toastify";
import { instance } from "../../utils/serviceApi";
import "react-toastify/dist/ReactToastify.css";
let url = import.meta.env.VITE_BASE_URL;

export const postExperience = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_EXPERIENCE_PENDING" });
    const result = await instance.post(url + `/experience`, data);
    console.log(result);
    toast.success(result.data.msg);
    window.location.reload();
    dispatch({ payload: result.data.msg, type: "POST_EXPERIENCE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.msg);
    dispatch({ payload: err.response.data.msg, type: "POST_EXPERIENCE_FAILED" });
    console.log(err.response.data.msg);
  }
};
export const getExperienceAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_EXPERIENCE_PENDING" });
    const result = await instance.get(url + `/experience`);
    dispatch({ payload: result.data, type: "GET_EXPERIENCE_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.msg, type: "GET_EXPERIENCE_FAILED" });
    console.log(err.response.data.msg);
  }
};
export const getExperienceById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DETAIL_EXPERIENCE_PENDING" });
    const result = await instance.get(url + `/experience/${id}`);
    localStorage.setItem("idExperience", id);
    dispatch({ payload: result.data.data, type: "DETAIL_EXPERIENCE_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.msg, type: "DETAIL_EXPERIENCE_FAILED" });
    console.log(err.response.data.message);
  }
};
export const getExperienceForRecruit = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DETAIL_EXPERIENCERECRUITER_PENDING" });
    const result = await instance.get(url + `/experience-hiring/${id}`);
    dispatch({ payload: result.data.data, type: "DETAIL_EXPERIENCERECRUITER_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.msg, type: "DETAIL_EXPERIENCERECRUITER_FAILED" });
    console.log(err.response.data.message);
  }
};
export const updateExperience = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_EXPERIENCE_PENDING" });
    const result = await instance.put(url + `/experience/${id}`, data);
    toast.success(result.data.msg);
    localStorage.removeItem("idExperience");
    window.location.reload();
    dispatch({ payload: result.data.msg, type: "UPDATE_EXPERIENCE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.msg);
    dispatch({ payload: err.response.data.message, type: "UPDATE_EXPERIENCE_FAILED" });
    console.log(err.response.data.message);
  }
};
export const deleteExperience = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_EXPERIENCE_PENDING" });
    const result = await instance.delete(url + `/experience/${id}`);
    console.log(result);
    toast.success(result.data.msg);
    window.location.reload();
    dispatch({ payload: result.data.msg, type: "DELETE_EXPERIENCE_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.msg);
    dispatch({ payload: err.response.data.msg, type: "DELETE_EXPERIENCE_FAILED" });
    console.log(err.response.data.msg);
  }
};
