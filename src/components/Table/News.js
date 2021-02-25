import React from 'react'

const News = ({ news,sortColumn }) => {

  return (
     <table className="table table-hover">
      <thead>
        <tr>
          <th onClick={() => sortColumn('id')} scope="col">Id</th>
          <th onClick={() => sortColumn('title')} scope="col">Title</th>
          <th onClick={() => sortColumn('domain')} scope="col">Domain</th>
          <th onClick={() => sortColumn('time_ago')} scope="col">Time added</th>
        </tr>
      </thead>
      <tbody>
        {news.map(item => (
          <tr key={ item.id }>
            <td>{ item.id }</td>
            <td>{ item.title }</td>
            <td>{ item.domain }</td>
            <td>{ item.time_ago }</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default News;