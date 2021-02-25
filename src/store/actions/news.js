import { FETCH_NEWS_ERROR, FETCH_NEWS_START, FETCH_NEWS_SUCCESS, SET_SORT_COLUMN_DATA, SET_CURRENT_PAGE } from "./actionTypes";

export function fetchNews(currentPage) {
  return async dispatch => {
    dispatch(fetchNewsStart()); 
    try {
      const response = await fetch(`https://api.hnpwa.com/v0/news/${currentPage}.json`)
      const news = await response.json();
      dispatch(fetchNewsSuccess(news));
    } catch (e) {
      dispatch(fetchNewsError(e))
    }
  }
}

export function fetchNewsStart() {
  return {
    type: FETCH_NEWS_START
  }
}

export function fetchNewsSuccess(news) {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  }
}

export function fetchNewsError(e) {
  return {
    type: FETCH_NEWS_ERROR,
    payload: e
  }
}

export function setSortColumnData(data, direction) {
  return {
    type: SET_SORT_COLUMN_DATA,
    payload: {
      newData: data,
      direction
    }
  }
}

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  }
}