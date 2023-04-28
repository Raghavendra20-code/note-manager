import React from "react";
import s from './style.module.css'

const ButtonPrimary = (Props) =>{
    return(
        <button onClick={Props.onClick} disabled={Props.isDisabled}  type="button" className={`btn btn-primary ${s.button}`}>{Props.children}</button>
    )
}

export default ButtonPrimary;