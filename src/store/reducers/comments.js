import { FETCH_COMMENTS_ERROR, FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_START:
      return {
        ...state, loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state, loading: false, comments: action.payload,
      };
    case FETCH_COMMENTS_ERROR:
      return {
        ...state, loadind: false, error: action.payload,
      };
    default: 
    return state
  }
}