import React from "react";
import "../ProgressBar/ProgressBar.css"
const Bar=(props)=>{
    return(
        <>
            <div className="progress-wrapper">
            <img src="./images/ProgressBar.svg" alt="progress bar" />
            <div className="progress-info">
                <h4 className="progress-info__title">
                    {props.data.number}
                </h4>
                <p className="progress-info__text section-text">
                    {props.data.desc}
                </p>
            </div>
            </div>
        </>
    )
}
export default Bar;