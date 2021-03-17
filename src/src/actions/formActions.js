import { FORM } from "../constants/Types";
import axios from "axios";
import { appConstants } from "../constants/app.constants";
import { message as alert, message } from "antd";
import { appHelpers } from "../appHelpers/appHelpers";
import {
  FORM as FORM_CONSTANT,
  INDICATOR_QUESTIONS,
  PROGRAMS,
} from "../Constants";

export const setLoadingState = (payload) => ({
  payload,
  type: FORM.setLoadingState,
});

export const buildAnswers = (payload) => ({
  payload,
  type: FORM.buildAnswers,
});

export const createForm = (form, service, history) => async (dispatch) => {
  try {
    dispatch(setLoadingState(true));
    const response = await service.createItemV1(form, FORM_CONSTANT);
    const { data, message } = response.data;
    alert.success(message);
    dispatch({
      type: FORM.createFormSuccess,
      payload: data,
    });
    history.push(`/app/dashboard/form/preview/${data?.id}`);
  } catch (err) {
    console.log(err);
    alert.error(
      err?.response?.data?.message?.message ||
        "Something went wrong, Please try again later"
    );
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally {
    dispatch(setLoadingState(false));
  }
};

export const getForms = (service, page) => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await service.getPaginatedData(FORM_CONSTANT, page);
    const { data } = response.data;

    dispatch({
      type: FORM.getFormsSuccess,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally {
    dispatch(setLoadingState(false));
  }
};

export const getForm = (id, service, endingSlash) => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await service.getDataWithId(
      FORM_CONSTANT,
      id,
      endingSlash
    );
    const { data } = response.data;

    dispatch({
      type: FORM.getFormSuccess,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    console.log(err.response);
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally {
    dispatch(setLoadingState(false));
  }
};

export const createSubmission = (id, answers, service) => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await service.createItemWithId(answers, FORM_CONSTANT, id);
    const { data } = response.data;

    dispatch({
      type: FORM.createSubmissionSuccess,
      payload: data,
    });
    appHelpers.successMessageAlert("Form Submitted Successfully", 2000);
  } catch (err) {
    console.log(err);
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally {
    dispatch(setLoadingState(false));
  }
};

export const getPrograms = (service) => async (dispatch) => {
  try {
    const response = await service.getItems(PROGRAMS);
    const { data } = response.data;
    dispatch({
      type: FORM.getPrograms,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  }
};

export const deleteForm = (id, service) => async (dispatch) => {
  alert.loading("Deleting Form", 0);
  try {
    await service.deleteItem(FORM_CONSTANT, id);
    dispatch({
      type: FORM.deleteForm,
    });
    appHelpers.successMessageAlert("Form Deleted Successfully", 2000);
    alert.destroy();
    window.location.reload();
  } catch (err) {
    alert.destroy();
    alert.error("There was an error deleting this form");
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  }
};

export const getIndicatorQuestion = (id, service) => async (dispatch) => {
  try {
    const response = await service.getDataWithId(
      INDICATOR_QUESTIONS,
      id,
      false
    );
    dispatch({
      type: FORM.getIndicatorQuestionSuccess,
      payload: response?.data?.data || [],
    });
  } catch (err) {
    console.log(err);
    console.log(err.response);
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  }
};

export const updateForm = (form, service, id, history) => async (dispatch) => {
  try {
    dispatch(setLoadingState(true));
    const response = await service.updateItemWithId(form, FORM_CONSTANT, id);
    const { data, message } = response.data;
    alert.success(message);
    dispatch({
      type: FORM.createFormSuccess,
      payload: data,
    });
    history.push(`/app/form/preview/${data?.id}`);
  } catch (err) {
    console.log(err);
    alert.error(
      err?.response?.data?.message?.message ||
        "Something went wrong, Please try again later"
    );
    dispatch({
      type: FORM.errors,
      payload: { msg: err.response, status: err.response },
    });
  } finally {
    dispatch(setLoadingState(false));
  }
};
