import { toast } from "react-toastify";
import { instance } from "../../utils/serviceApi";
let url = import.meta.env.VITE_BASE_URL;

export const postSkillAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: "POST_SKILL_PENDING" });
    const result = await instance.post(url + `/skill`, data);
    console.log(result);
    toast.success(result.data.message);
    getSkillAction();
    dispatch({ payload: result.data.message, type: "POST_SKILL_SUCCESS" });
  } catch (err) {
    console.log("error");
    toast.error(err.response.data.message);
    dispatch({ payload: err.response.data.message, type: "POST_SKILL_FAILED" });
    console.log(err.response.data.message);
  }
};
export const getSkillAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_SKILL_PENDING" });
    const result = await instance.get(url + `/skillid`);
    console.log(result);
    dispatch({ payload: result.data.data, type: "GET_SKILL_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "GET_SKILL_FAILED" });
    console.log(err.response.data.message);
  }
};
export const getSkillForRecruitAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SKILLRECRUITER_PENDING" });
    const result = await instance.get(url + `/skill-hiring/${id}`);
    console.log(result);
    dispatch({ payload: result.data.data, type: "GET_SKILLRECRUITER_SUCCESS" });
  } catch (err) {
    console.log("error");
    dispatch({ payload: err.response.data.message, type: "GET_SKILLRECRUITER_FAILED" });
    console.log(err.response.data.message);
  }
};
