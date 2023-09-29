import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from '../../utils/serviceApi';
let url = import.meta.env.VITE_BASE_URL;


export const chatWorker = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'WORKER_CHAT_PENDING' });
    const result = await axios.post(url + `/postMessage`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_worker')}`,
        "Content-Type":  "application/json"
      },
    });
    console.log(result);
    dispatch({ payload: result.data, type: 'WORKER_CHAT_SUCCESS' });
    toast.success(result.data.message);
  } catch (err) {
    console.log('error');
    dispatch({ payload: err.response.data, type: 'WORKER_CHAT_FAILED' });
    console.log(err);
    toast.error(err.response.data.message);
  }
};

export const getWorkerContact = () => async (dispatch) => {
  try {
    dispatch({type: 'GET_CONTACT_PENDING'})
    const result = await axios.get(url + `/participantUser1`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_worker')}`,
      },
    });
    console.log(result);
    dispatch({ payload: result.data.data, type: 'GET_CONTACT_SUCCESS' });
    toast.success(result.data.message);
  } catch (err) {
    console.log('error');
    dispatch({ payload: err.response.data, type: 'GET_CONTACT_FAILED' });
    console.log(err);
    toast.error(err.response.data.message);
  }
}
export const getWorkerMessage = (id) => async (dispatch) => {
  try {
    dispatch({type: 'GET_CHAT_PENDING'})
    const result = await axios.get(url + `/messageUser1/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_worker')}`,
      },
    });
    console.log(result);
    dispatch({ payload: result.data, type: 'GET_CHAT_SUCCESS' });
    toast.success(result.data.message);
  } catch (err) {
    console.log('error');
    dispatch({ payload: err.response.data, type: 'GET_CHAT_FAILED' });
    console.log(err);
    toast.error(err.response.data.message);
  }
}
