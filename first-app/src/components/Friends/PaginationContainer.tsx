import { useState } from 'react';
import classes from './Friends.module.css';

type PropsType = {
  currentPage: number
  setCurrentPage: (p: number) => void
  totalUserCount: number
}

export const PaginationContainer: React.FC<PropsType> = (props) => {

  let pagesCount = Math.ceil(props.totalUserCount / 10);
  let portionSize = 10;

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState<number>(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.pageButtons}>
      {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>left</button>}
      {pages
        .filter(p=> p>= leftPortionPageNumber && p<=rightPortionPageNumber)
        .map(p => {
        return <span
          className={props.currentPage === p ? classes.selectedPage : classes.pageNumber}
          onClick={() => props.setCurrentPage(p)}>{p}</span>
      })}
      {portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>right</button>}
    </div>
  )
}