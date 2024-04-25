import { useEffect, useState } from 'react'
import classes from './ProfileStatus.module.css'

type PropsType = {
  status: string
  setStatus: (text: string) => void

}

export const ProfileStatus: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [statusText, setStatusText] = useState(props.status);

  useEffect(()=>{
    setStatusText(props.status)
  }, [props.status])

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setStatusText(e.target.value);
  } 

  const setEditText = () => {
    props.setStatus(statusText);
    setEditMode(!editMode);
  }

  return (
    <div >
      {editMode ?
          <div onClick={() => setEditMode(!editMode)}>
            <span>{statusText || 'set status'}</span>
          </div>
        : <div>
            <input 
              autoFocus={true}
              className={classes.inputClass}
              value={statusText}
              onChange={changeStatus}
            />
            <button 
              onBlur={() => setEditMode(!editMode)}
              onClick={setEditText}>save</button>
          </div>
      }
    </div>
  )
}