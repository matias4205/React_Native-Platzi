import { GET_CATEGORY_LIST, GET_SUGGESTION_LIST, SET_MOVIE_SELECTED, SET_MOVIE_UNSELECTED } from '../types/videos';
import API from '../utils/api';

export const fetchSuggestionList = (id) => async(dispatch) => {
  const movies = await API.getSuggestions(id);
  dispatch({
    type: GET_SUGGESTION_LIST,
    payload: {
      movies
    }
  });
}

export const fetchCategoriesList = () => async(dispatch) => {
  const categories = await API.getCategories();
  dispatch({
    type: GET_CATEGORY_LIST,
    payload: {
      categories
    }
    });
}

export const movieSelected = (movie) => async(dispatch) => {
  dispatch({
    type: SET_MOVIE_SELECTED,
    payload: movie
  })
}