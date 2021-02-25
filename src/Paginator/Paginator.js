import React, { useState } from 'react'
import styles from './paginator.module.scss'


const Paginator = ({pagesCount, portionSize, currentPage, onPageChanged}) => {
  let pages = new Array(parseInt(pagesCount))
  pages.map((_, index) => (index+1))
  for(let i =0; i<pages.length; i++) {
    pages[i] = i+1
  }

  let portionCount = Math.ceil(pagesCount/portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  return (
    <div className={styles['container']}>
      {portionNumber > 1 ? <span onClick={() => (setPortionNumber(prev => prev - 1))}><i className="fas fa-arrow-left"></i>&nbsp;</span> : null}
        {
          pages.filter((item) => (item >= leftPortionNumber && item <=rightPortionNumber))
          .map(item => {
            return (
              <span key={item}
                onClick={() => (onPageChanged(item))}
                className={currentPage === item ? styles['currentPage'] : null}
              >
                {item}
              </span>
            )
          })
        }
      {portionNumber < portionCount ? <span onClick={() => (setPortionNumber(prev => prev + 1))}>&nbsp;<i className="fas fa-arrow-right"></i> </span> : null}
    </div>
  )

};

export default Paginator;