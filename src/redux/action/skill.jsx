import axios from "axios";
import { toast } from "react-toastify";
import { instance } from "../../utils/serviceApi";
let url = import.meta.env.VITE_BASE_URL;

export const postSkill = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_SKILL_PENDING" });
    const result = await axios.post(url + `/skill`, data);
    console.log(result);
    dispatch({ payload: result.data.message, type: "POST_SKILL_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "POST_SKILL_FAILED" });
    console.log(err.response.data.message);
  }
};
export const getSkill = (data) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SKILL_PENDING" });
    const result = await axios.get(url + `/skill`, data);
    console.log(result);
    dispatch({ payload: result.data.message, type: "GET_SKILL_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "GET_SKILL_FAILED" });
    console.log(err.response.data.message);
  }
};
