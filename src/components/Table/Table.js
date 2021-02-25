import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Loader from '../../Loader/Loader';
import { fetchNews, setSortColumnData } from '../../store/actions/news';
import News from './News';
import lodash from 'lodash'

const Table = ({ news,loading,fetchNews,sortDirection,setSortColumnData }) => {

  useEffect(() => {
    fetchNews()
  }, [])

  const onSortColumn = ( sortField ) => {
    const bufferedData = news.concat();
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';

    const sortedData = lodash.orderBy(bufferedData, sortField, direction);
    setSortColumnData(sortedData,direction);
  }

  return (
    <div className="container">
      {loading ? <Loader/> : <News news={news} sortColumn={onSortColumn} />}
    </div>)
};

function mapStateToProps(state) {
  return {
    news: state.news.news,
    loading: state.news.loading,
    sortDirection: state.news.sortDirection,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: () => dispatch(fetchNews()),
    setSortColumnData: (data,direction) => dispatch(setSortColumnData(data,direction)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)