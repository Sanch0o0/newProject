import { CountDateElem } from './CountDateElem/CountDateElem';
import './CountDate.scss'

export function CountDate({ date }) {
  return (
    <div className='countDate'>
      {date.map((elemDate, id) => {
        return (id !== 3)
          ? (
            <>
              <CountDateElem date={elemDate} key={id} />
              <div className='colon'>:</div>
            </>
          )
          : <CountDateElem date={elemDate} key={id} />
      })}
    </div>
  );
}