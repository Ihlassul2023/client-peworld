import { toast } from "react-toastify";
import { instance } from "../../utils/serviceApi";
let url = import.meta.env.VITE_BASE_URL;

export const postPortofolio = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_PORTOFOLIO_PENDING" });
    const result = await instance.post(url + `/portofolio`, data);
    console.log(result);
    toast.success(result.data.message);
    getPortofolioAction();
    dispatch({ payload: result.data.message, type: "POST_PORTOFOLIO_SUCCESS" });
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
    const result = await instance.get(url + `/portofolio`);
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
    const result = await instance.get(url + `/portofolio/${id}`);
    console.log(result);
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
    const result = await instance.get(url + `/portofolio-hiring/${id}`);
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
    const result = await instance.put(url + `/portofolio/${id}`, data);
    console.log(result);
    toast.success(result.data.message);
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
    const result = await instance.delete(url + `/portofolio/${id}`);
    console.log(result);
    toast.success(result.data.message);
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
