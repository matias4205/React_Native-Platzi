import { GET_CATEGORY_LIST, GET_SUGGESTION_LIST, SET_MOVIE_SELECTED } from '../types/videos';

const INITIAL_STATE = {
    categories: [],
    movies: [],
    selectedMovie: null
}

export default (state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case GET_SUGGESTION_LIST:
            return {
                ...state, 
                ...payload
            }
        
        case GET_CATEGORY_LIST:
            return {
                ...state,
                ...payload
            }
        
        case SET_MOVIE_SELECTED:
            return {
                ...state,
                selectedMovie: payload
            }

        default:
            return state
    }
}