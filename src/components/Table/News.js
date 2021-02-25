import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./table.module.scss";

const News = ({ news,sortColumn }) => {

  return (
     <table className="table table-hover">
      <thead>
        <tr>
          <th onClick={() => sortColumn('id')} scope="col" className={styles['columnHead']}>Id</th>
          <th onClick={() => sortColumn('title')} scope="col" className={styles['columnHead']}>Title</th>
          <th onClick={() => sortColumn('domain')} scope="col" className={styles['columnHead']}>Domain</th>
          <th onClick={() => sortColumn('time_ago')} scope="col" className={styles['columnHead']}>Time added</th>
        </tr>
      </thead>
      <tbody>
          {news.map(item => (
           
            <tr key={item.id}>
              <td>{ item.id } </td>
              <td>
                <Link
                  to={`/news/${item.id}`}
                  key={ item.id }> { item.title } 
                </Link>
              </td>
              <td>{ item.domain }</td>
              <td>{ item.time_ago }</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
};

export default News;