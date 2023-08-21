import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { instance } from "../../utils/serviceApi";
let url = import.meta.env.VITE_BASE_URL;

export const getSearchSort = (search, searchby, limit, page, sort, sortby) => async (dispatch) => {
    try {
      dispatch({ type: "GET_HOME_PENDING" });
      const result = await instance.get(url + `/search?search=${search}&searchby=${searchby}&limit=${limit}&page=${page}&sort=${sort}&sortby=${sortby}`);
      toast.success(result.data.message);
      dispatch({ payload: result.data.data, type: "GET_HOME_SUCCESS" });
    } catch (err) {
      console.log("error");
      toast.error(err.response.data.message);
      dispatch({ payload: err.response.data.message, type: "GET_HOME_FAILED" });
      console.log(err);
    }
};