import './CountDateElem.scss'

export function CountDateElem({ date }) {
  return (
    <div className='countDateElem'>
      <span>{(date <=9) ? '0'+ date : date}</span>
    </div>
  );
}