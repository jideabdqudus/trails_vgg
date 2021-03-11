import { FORM } from "../constants/Types";
import axios from "axios";
import { appConstants } from '../constants/app.constants'
import {message as alert} from 'antd'
import { appHelpers } from "../appHelpers/appHelpers";

export const setLoadingState = (payload) => ({
  payload,
  type: FORM.setLoadingState
})

export const buildAnswers = (payload) => ({
  payload,
  type: FORM.buildAnswers
})

export const createForm = (form, token,history) => async (dispatch) => {
  const config = {
    headers: {
          "Content-Type": "application/json",
          "accessToken": token
    },
  };
  try {
    dispatch(setLoadingState(true))
    const response = await axios.post(
      `${appConstants.REACT_APP_BASE_URL}/form/`,
      form,
      config
    );
    const {data, message} = response.data
    alert.success(message)
    dispatch({
      type: FORM.createFormSuccess,
      payload: data,
    });
    history.push(`form/preview/${data?.id}`)
  } catch (err) {
    console.log(err.response)
    alert.error(err?.response?.data?.message?.message || 'Something went wrong, Please try again later')
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally{
     dispatch(setLoadingState(false))
  }
};

export const getForms = (token,page) => async (dispatch) => {
   dispatch(setLoadingState(true))
  const config = {
    headers: {
          "Content-Type": "application/json",
          "accessToken": token
    },
  };
  try {
    const response = await axios.get(
      `${appConstants.REACT_APP_BASE_URL}/form/?page=${page}&pageBy=10`,
      config
    );
    const { data } = response.data
  
    dispatch({
      type: FORM.getFormsSuccess,
      payload: data,
    });
  } catch (err) {
      console.log(err.response)
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally{
   dispatch(setLoadingState(false))
  }
};

export const getForm = (id, token) => async (dispatch) => {
  dispatch(setLoadingState(true))
  !token && delete axios.defaults.headers.common["x-auth-token"];
  const config = {
    headers: {
          "Content-Type": "application/json",
          "accessToken": token,
    },
  };
  try {

    const response = await axios.get(
      `${appConstants.REACT_APP_BASE_URL}/form/${id}${token ? '/' : ''}`,
       token ? config : {}
    );
    const {data} = response.data
   
    dispatch({
      type: FORM.getFormSuccess,
      payload: data,
    });
  } catch (err) {
      console.log(err.response)
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally {
    dispatch(setLoadingState(false))
  }
};


export const createSubmission = (id,answers) => async (dispatch) => {
  dispatch(setLoadingState(true))
  delete axios.defaults.headers.common["x-auth-token"];
  const config = {
    headers: {
          "Content-Type": "application/json",
    },
  };
  try {

    const response = await axios.post(
      `${appConstants.REACT_APP_BASE_URL}/form/${id}`,
       answers,
       config
    );
    const {data} = response.data
   
    dispatch({
      type: FORM.createSubmissionSuccess,
      payload: data,
    });
    appHelpers.successMessageAlert("Form Submitted Successfully", 2000)
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  } catch (err) {
      console.log(err.response)
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally {
    dispatch(setLoadingState(false))
  }
};