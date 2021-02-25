import { FETCH_NEWS_ERROR, FETCH_NEWS_START, FETCH_NEWS_SUCCESS, SET_SORT_COLUMN_DATA, SET_CURRENT_PAGE } from "../actions/actionTypes";

const initialState = {
    news: [],
    loading: false,
    error: null,
    sortDirection: 'asc',
    currentPage: 1,
    totalCount: 10,
};

export default function newsReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_NEWS_START:
      return {
        ...state, loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state, loading: false, news: action.payload,
      };
    case FETCH_NEWS_ERROR:
      return {
        ...state, loadind: false, error: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.payload,
      };
    case SET_SORT_COLUMN_DATA:
      return {
        ...state, news: action.payload.newData, sortDirection: action.payload.direction,
      };
    default: 
      return state
  }
}