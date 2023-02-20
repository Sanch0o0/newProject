import './CounterPage.scss';
import { Logo } from '../Logo/Logo';
import { Counter } from '../Counter/Counter';
import { Footer } from '../Footer/Footer';
import leftBgPic from '../../assets/left-pic.png';
import rightBgPic from '../../assets/right-pic.png';
import { EventButton } from '../EventButton/EventButton';


export function CounterPage({handleEmailData, sending}) {


  return (
    <div className="counterPage">
      <div className='left-bg-pic_container'>
        <img src={leftBgPic} alt="leftBgPic" className='left-bg-pic' />
      </div>
      <div className='right-bg-pic_container'>
        <img src={rightBgPic} alt="leftBgPic" className='right-bg-pic' />
      </div>
      <Logo />
      <h1 className='h-1'>UNDER CONSTRUCTION</h1>
      <div className='m-desc'>We're making lots of impovements and will be back soon</div>
      <Counter />
      <EventButton />
      <Footer handleEmailData={handleEmailData} sending={sending} />
    </div>
  );
}