import {REPORTS, PROGRAM_FORMS} from '../Constants'
import {REPORT} from '../constants/Types'
import {message as alert} from 'antd'


export const setLoadingState = (payload) => ({
    payload,
    type: REPORT.setLoadingState
})
  

export const getReport = (id, service) => async (dispatch) => {
    dispatch(setLoadingState(true))
    try {
      const response = await service.getDataWithId(REPORTS,id);
      if(!response){
        alert.error('Ooops, We could not fetch dashboard reports for this form')
      }
      dispatch({
        type: REPORT.getReportSuccess,
        payload: response?.data?.data || [],
      });
    } catch (err) {
      alert.error(err?.response?.data?.message || 'Ooops, Something went wrong, Please Try Again')
      dispatch({
        type: REPORT.errors,
        payload: { msg: err.response, status: err.response },
      });
    } finally{
        dispatch(setLoadingState(false))
    }
  };
  

  export const getFormLinkedToProgram = (id, service) => async (dispatch) => {
    dispatch(setLoadingState(true))
    try {
      const response = await service.getDataWithId(PROGRAM_FORMS,id, true);
      const {data} = response.data
     
      dispatch({
        type: REPORT.getProgramFormsSuccess,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: REPORT.errors,
        payload: { msg: err.response, status: err.response },
      });
    } finally {
      dispatch(setLoadingState(false))
    }
  };