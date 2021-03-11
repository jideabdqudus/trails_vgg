import {FORM} from '../constants/Types'

const initialState = {
    form: {},
    error: null,
    forms: [],
    loading: false,
    pagination: {},
    answers: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FORM.setLoadingState:
            return {...state, loading: payload}

    case FORM.createFormSuccess:
        return { ...state, form: payload, loading: false }
    
    case FORM.errors:
        return {...state, forms:[], form: {}, error: payload, loading: false}

    case FORM.getFormSuccess:
            return { ...state, form: payload, loading: false }
        
        case FORM.getFormsSuccess:
            return {...state, forms: payload.data, pagination: payload.pagination}
    
        case FORM.buildAnswers:
            return {...state, answers: {...state.answers, [payload.questionId]: payload }}
    default:
        return state
    }
}
