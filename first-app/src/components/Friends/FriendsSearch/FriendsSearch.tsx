import { useSelector } from 'react-redux';
import classes from './FriendsSearch.module.css';
import { Formik, Field, Form } from "formik";
import { AppStateType } from '../../../state/reduxStore';


type PropsType = {
  onFilterChanged: (text:string, friend: null | boolean) => void
}

type FormikValues = {
  name: string
  friend: string
} 

export const FriendsSearch: React.FC<PropsType> = (props) => {

  const filter = useSelector((state: AppStateType)=> state.friendsReducer.filter);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ name: filter.term, friend: 'filter.friend' } as FormikValues}
        onSubmit={(values) => {
          let friend = null;
          if(values.friend === 'true') friend = true;
          if(values.friend === 'false') friend = false;
          props.onFilterChanged(values.name, friend);
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field as="select" name="friend">
             <option value="null">All</option>
             <option value='true'>Only followed</option>
             <option value="false">Only unfollowed</option>
           </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}