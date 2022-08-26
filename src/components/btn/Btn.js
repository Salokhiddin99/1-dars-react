import React from "react";
import "../btn/Btn.css"
const Btn=({className,children})=>{
    return(
        <>
        <a href="#" className={className}>{children}</a>
        </>
    )
}
export default Btn;