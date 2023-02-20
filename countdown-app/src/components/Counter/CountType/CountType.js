import './CountType.scss';
import { CountTypeElem } from './CountType/CountTypeElem';

export function CountType({ types }) {
  return (
    <div className='countType'>
      {types.map((type, id) => {
        return <CountTypeElem type={type} key={id} />
      })}
    </div>
  );
}