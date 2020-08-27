import React, {FC} from "react";
import {FieldAttributes, useField} from "formik";

import './input.css';

type inputType = { label: string} & FieldAttributes<any>

const Input: FC<inputType> = ({label, ...props}) => {

  const [field, meta] = useField(props);

  return (
    <div className='form-control'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input'{...field}  {...props}/>
      {
        meta.touched && meta.error
        ? (
          <div className='error'>
            <span>{meta.error}</span>
          </div>
          )
          : null
      }
    </div>
  )
}

export default Input;