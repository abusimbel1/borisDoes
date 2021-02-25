import { FETCH_COMMENTS_ERROR, FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS, FETCH_NEWS_ERROR } from "./actionTypes";

export function fetchComments(id) {
  return async dispatch => {
    dispatch(fetchCommentsStart()); 
    try {
      const response = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
      const commetns = await response.json();
      dispatch(fetchCommentsSuccess(commetns));
    } catch (e) {
      dispatch(fetchCommentsError(e))
    }
  }
}

export function fetchCommentsStart() {
  return {
    type: FETCH_COMMENTS_START
  }
}

export function fetchCommentsSuccess(news) {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: news,
  }
}

export function fetchCommentsError(e) {
  return {
    type: FETCH_COMMENTS_ERROR,
    payload: e
  }
}