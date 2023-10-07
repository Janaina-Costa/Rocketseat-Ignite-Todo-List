import React, { ButtonHTMLAttributes} from "react";


export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...props}) => {
  return (
    <button type={props.type} onClick={props.onClick}   className={props.className}>
      {props.children}
    </button>
  )
}