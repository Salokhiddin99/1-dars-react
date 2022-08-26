import React from "react";
import Bar from "../ProgressBar/ProgressBar";
import "../ProgressSection/ProgressSection.css"
const ProgressSection=()=>{
    let ProgressData=[
        {
            number:"500+",
            desc:"Judul Buku"
        },
        {
            number:"$0",
            desc:"Gratis Peminjaman"
        },
        {
            number:"5",
            desc:"Kegiatan Rutin"
        },
    ]
    return(
        <>
           <section className="progress">
            <div className="container progress__container">
                {
                    ProgressData.map(item=>{
                        return <Bar data={item}/>
                    })
                }
            </div>
           </section>
        </>
    )
}
export default ProgressSection;