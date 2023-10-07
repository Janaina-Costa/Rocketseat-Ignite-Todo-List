import React, { InputHTMLAttributes } from "react";

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {
  return (
    <input 
    type={props.type} 
    placeholder={props.placeholder} 
    onChange={props.onChange} 
    className={props.className} 
    value={props.value} 
    onFocus={props.onFocus}
    />
  )
}