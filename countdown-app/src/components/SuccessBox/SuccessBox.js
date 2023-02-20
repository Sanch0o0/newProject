import './SuccessBox.scss';
import closeCross from '../../assets/close-button.svg'

export function SuccsessBox({ setSuccess }) {

  const closeSuccessBox = () => {
    setSuccess(false)
  }

  return (
    <div className='successBox'>
      <div className='sendSuccess'>
        <div className='closeCross' onClick={ closeSuccessBox }>
          <img src={closeCross}/> 
        </div>      
        <div className='header'>SUCCESS!</div>
        <div className='text'> You have successfully subscribed to the email newsletter</div>
        <button className='butt' onClick={ closeSuccessBox }> Close </button>
      </div>
    </div>
  );
}