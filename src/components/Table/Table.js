import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Loader from '../../Loader/Loader';
import { fetchNews, setSortColumnData, setCurrentPage } from '../../store/actions/news';
import { createPages } from "../../utils/pagesGreator";
import News from './News';
import lodash from 'lodash'
import Paginator from '../../Paginator/Paginator';

const Table = ({ news,loading,fetchNews,sortDirection,currentPage,totalCount,setSortColumnData,setCurrentPage }) => {

  const PORTION_SIZE = 3;
  const PAGES_COUNT = 10;

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage])

  const onSortColumn = ( sortField ) => {
    const bufferedData = news.concat();
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';

    const sortedData = lodash.orderBy(bufferedData, sortField, direction);
    setSortColumnData(sortedData,direction);
  }
 
  return (
    <div className="container">
      {loading ? <Loader/> : <News news={news} sortColumn={onSortColumn} />}
      <Paginator pagesCount={PAGES_COUNT} portionSize={PORTION_SIZE} currentPage={currentPage} onPageChanged={setCurrentPage}/>
    </div>)
};

function mapStateToProps(state) {
  return {
    news: state.news.news,
    loading: state.news.loading,
    sortDirection: state.news.sortDirection,
    currentPage: state.news.currentPage,
    totalCount: state.news.totalCount,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: (currentPage) => dispatch(fetchNews(currentPage)),
    setSortColumnData: (data,direction) => dispatch(setSortColumnData(data,direction)),
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)