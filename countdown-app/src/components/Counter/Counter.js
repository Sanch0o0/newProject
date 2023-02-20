import './Counter.scss';
import { useEffect, useState } from 'react';
import { CountDate } from './CountDate/CountDate';
import { CountType } from './CountType/CountType';
import { count } from './count';


export function Counter() {
  const [time, setTime] = useState(count());
  const type = ['Days', 'Hours', 'Minutes', 'Seconds'];

  useEffect(() => {
    setInterval(() => {
      setTime(count())
    }, 1000)
  }, [])

  return (
    <div className="counter">
      <CountDate date={time} />
      <CountType types={type} />
    </div>
  );
}