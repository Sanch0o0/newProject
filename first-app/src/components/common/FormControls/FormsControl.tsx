import { Field } from 'redux-form';
import classes from './FormControl.module.css'
import { FieldValidatorType } from '../../../utils/validators/validators';

type TextInputType = {
  inputP: string
  meta: {
    touched: boolean
    error: string | null
  }
}

export const TextInput = ({
  inputP,
  meta,
  ...props
}: any) => {

  const hasError = meta.touched && meta.error;

  return (
    <div className={classes.formControl + '' + (hasError && classes.error)}>
      <input {...inputP} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}



export const createField = (placeholder: string, 
                            name: string, 
                            validators: Array<FieldValidatorType>, 
                            component: string | React.FC | React.Component, 
                            props = {}, 
                            text = '') => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}/> {text}
    </div>
  )
}