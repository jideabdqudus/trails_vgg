import { CREATE_PROJECT, GET_PROJECT, TEST_DISPATCH } from '../constants/Types'

export const createProject = project => {
  return {
    type: CREATE_PROJECT,
    payload: project,
  }
}

export const getProject = ()=>{
  return{
    type: GET_PROJECT
  }
}

export const testDispatch = (project)=>{
  return {
    type: TEST_DISPATCH,
    payload: project
  }
}