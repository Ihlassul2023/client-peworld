import { toast } from "react-toastify";
import { instance } from "../../utils/serviceApi";
let url = import.meta.env.VITE_BASE_URL;

export const postPortofolio = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_PORTOFOLIO_PENDING" });
    const result = await instance.post(url + `/portfolio`, data);
    console.log(result);
    toast.success(result.data.msg);
    window.location.reload();
    getPortofolioAction();
    dispatch({ payload: result.data.msg, type: "POST_PORTOFOLIO_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "POST_PORTOFOLIO_FAILED" });
    console.log(err.response.data.message);
  }
};
export const getPortofolioAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PORTOFOLIO_PENDING" });
    const result = await instance.get(url + `/portfolio`);
    console.log(result);
    dispatch({ payload: result.data, type: "GET_PORTOFOLIO_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "GET_PORTOFOLIO_FAILED" });
    console.log(err.response.data.message);
  }
};
export const getPortofolioById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DETAIL_PORTOFOLIO_PENDING" });
    const result = await instance.get(url + `/portfolio/${id}`);
    console.log(result);
    localStorage.setItem("idPortofolio", id);
    dispatch({ payload: result.data.data, type: "DETAIL_PORTOFOLIO_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "DETAIL_PORTOFOLIO_FAILED" });
    console.log(err.response.data.message);
  }
};
export const getPortofolioForRecruit = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DETAIL_PORTOFOLIORECRUITER_PENDING" });
    const result = await instance.get(url + `/portfolio-hiring/${id}`);
    console.log(result);
    dispatch({ payload: result.data.data, type: "DETAIL_PORTOFOLIORECRUITER_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "DETAIL_PORTOFOLIORECRUITER_FAILED" });
    console.log(err.response.data.message);
  }
};
export const updatePortofolio = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PORTOFOLIO_PENDING" });
    const result = await instance.put(url + `/portfolio/${id}`, data);
    console.log(result);
    toast.success(result.data.msg);
    window.location.reload();
    localStorage.removeItem("idPortofolio");
    getPortofolioAction();
    dispatch({ payload: result.data.message, type: "UPDATE_PORTOFOLIO_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "UPDATE_PORTOFOLIO_FAILED" });
    console.log(err.response.data.message);
  }
};
export const deletePortofolio = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PORTOFOLIO_PENDING" });
    const result = await instance.delete(url + `/portfolio/${id}`);
    console.log(result);
    toast.success(result.data.msg);
    window.location.reload();
    localStorage.removeItem("idPortofolio");
    getPortofolioAction();
    dispatch({ payload: result.data.message, type: "DELETE_PORTOFOLIO_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "DELETE_PORTOFOLIO_FAILED" });
    console.log(err.response.data.message);
  }
};
