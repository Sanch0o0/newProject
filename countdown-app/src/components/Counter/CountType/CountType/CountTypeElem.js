import './CountTypeElem.scss';

export function CountTypeElem({ type }) {
  return (
    <div className='countTypeElem'>
      <div>{type}</div>
    </div>
  );
}