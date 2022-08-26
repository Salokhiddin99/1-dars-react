import React from "react";
import "../TeamCard/TeamCard.css"
const TeamCard=({className,children})=>{
    return(
        <>
        <div className={className}>
            {children}
        </div>
        </>
    )
}
export default TeamCard;