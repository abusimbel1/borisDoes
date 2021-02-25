import React from 'react'
import { Link } from 'react-router-dom'
import styles from './item.module.scss'



const Comments = ({comments}) => {
  return (
    <div className={styles.flexContainer}>
      <div>
        <h1 className={styles['flexContainer--title']}>{comments.title}</h1>
        <ul>
          {comments.comments ? comments.comments.map(item => (<li key={item.id}>{item.content}</li>)) : 'No comments yet...'}
        </ul>
      </div>
      <Link to="/" className={styles['flexContainer--backButton']}>
        <button >Back</button>
      </Link>
    </div>
  )
}

export default Comments;