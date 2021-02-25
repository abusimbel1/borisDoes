import { combineReducers } from 'redux'
import newsReducer from "./news";
import commentsReducer from "./comments"

export default combineReducers({
  news: newsReducer,
  comments: commentsReducer,
})

