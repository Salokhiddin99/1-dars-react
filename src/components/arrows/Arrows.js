import React, { Children } from "react";
import { Icon } from 'react-icons-kit'
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import "../arrows/Arrows.css"
const Arrow=({className,children})=>{
return(
<>
    <a href="#" className={className}>
        <div className="arrow-left">
            {children}
        </div>
    </a>
</>
)
}
export default Arrow;