import axios from 'axios';
import { useState } from 'react';


export const useApi = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleEmailData = async (email) => {
    setSending(true);

    try {
      await axios.post(`https://jsonplaceholder.typicode.com/users`, { email })
        .then(res => {
          setSuccess(true);
        })
    } catch (error) {
      setSuccess(false);
      console.log('errorrrr')
    }

    setSending(false);

  }

  return {
    sending,
    success,
    setSuccess,
    handleEmailData
  }
}