import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { instance } from '../../utils/serviceApi';
let url = import.meta.env.VITE_BASE_URL;

export const chatHire = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'SEND_CHAT_PENDING' });
    const result = await axios.post(url + `/postMessage`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_recruiter')}`,
        "Content-Type":  "application/json"
      },
    });
    console.log(result);
    dispatch({ payload: result.data, type: 'SEND_CHAT_SUCCESS' });
    toast.success(result.data.message);
    setTimeout(()=>{
      navigate('/chat')
    }, 2000)
  } catch (err) {
    console.log('error');
    dispatch({ payload: err.response.data, type: 'SEND_CHAT_FAILED' });
    console.log(err);
    toast.error(err.response.data.message);
  }
};
export const chatRecruiter = (data) => async (dispatch) => {
  try {
    dispatch({ type: 'RECRUITER_CHAT_PENDING' });
    const result = await axios.post(url + `/postMessage`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_recruiter')}`,
        "Content-Type":  "application/json"
      },
    });
    console.log(result);
    dispatch({ payload: result.data, type: 'RECRUITER_CHAT_SUCCESS' });
    toast.success(result.data.message);
  } catch (err) {
    console.log('error');
    dispatch({ payload: err.response.data, type: 'RECRUITER_CHAT_FAILED' });
    console.log(err);
    toast.error(err.response.data.message);
  }
};

export const getContactChat = () => async (dispatch) => {
  try {
    dispatch({type: 'GET_CONTACT_PENDING'})
    const result = await axios.get(url + `/participantUser2`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_recruiter')}`,
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
export const getChatMessage = (id) => async (dispatch) => {
  try {
    dispatch({type: 'GET_CHAT_PENDING'})
    const result = await axios.get(url + `/messageUser2/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token_recruiter')}`,
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
