import {REPORT} from '../constants/Types'

const initialState = {
    reports:[],
    errors: null,
    loading: false,
    programForms: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case REPORT.setLoadingState:
            return {...state, loading: payload}

    case REPORT.getReportSuccess:
        return { ...state, reports: payload, loading: false }
    
    case REPORT.errors:
        return {...state, reports:[],  error: payload, loading: false}

    case REPORT.getProgramFormsSuccess:
        return {...state, programForms: payload, loading: false}

    default:
        return state
    }
}
