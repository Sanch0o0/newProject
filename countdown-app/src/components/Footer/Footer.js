import './Footer.scss';
import arrowRight from '../../assets/arrow-right.svg';
import { useState } from 'react';


export function Footer({ handleEmailData, sending }) {

  const [inputText, setInputText] = useState('');

  const onInputChange = (e) => {
    setInputText(e.target.value);
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!inputText) return;

    await handleEmailData(inputText);

    setInputText('');
  }

  return (
    <div className="footer">
      <form onSubmit={onFormSubmit}>
        <input
          type='email'
          value={inputText}
          className='form-input'
          placeholder='Enter your Email and get notified'
          onChange={onInputChange}
        ></input>
        {(sending)
          ? (
            <div className='loader'></div>
          )
          : <button className='form-button'>
              <img src={arrowRight} alt='arrow-right' />
            </button>
        }

      </form>
    </div>
  );
}

