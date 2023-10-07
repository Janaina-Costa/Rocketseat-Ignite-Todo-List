import React, { ImgHTMLAttributes,} from "react"


export const Image: React.FC <ImgHTMLAttributes<HTMLImageElement>> = ({...props})=>{
  return(
    <img src={props.src} alt={props.alt} width={props.width} height={props.height} />
  )
}