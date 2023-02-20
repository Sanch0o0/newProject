import './EventButton.scss';
import arrowRight from '../../assets/arrow-right.svg';

export function EventButton() {
  return (
    <>
      <div className='under-desc'>Check our event page when you wait</div>
      <div className="eventButton">
        <a href='https://jsonplaceholder.typicode.com/users'>
          <button className='go-butt'>
            <span className='go-butt_text'> Go to the event </span>
            <img src={arrowRight} alt='arrow-fight' className='arrow-right' />
          </button>
        </a>
      </div>
    </>
  );
}