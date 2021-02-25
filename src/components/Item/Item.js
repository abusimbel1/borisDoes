import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchComments } from '../../store/actions/comments';
import classes from './item.module.scss'
import Loader from '../../Loader/Loader';
import Comments from './Comments';



const Item = ({ match,loading, comments,fetchComments }) => {
  useEffect(() => {
    fetchComments(match.params.id)
  }, [])

  return (
    <div className="container">
      {loading ? <Loader/> : <Comments comments={comments}/>}
    </div>
  )
};

function mapStateToProps(state) {
  return {
    comments: state.comments.comments,
    loading: state.comments.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComments: (id) => dispatch(fetchComments(id)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);