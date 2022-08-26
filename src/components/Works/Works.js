import React from "react";
import "../Works/Works.css"
const Works=()=>{
    return(
        <>  
            <section className="works">
                <div className="container">
                <div className="clients-inner">
                    <h3 className="clients__title section-title">
                    Apa Kata Mereka?
                    </h3>
                    <p className="clients__text section-text">
                    Selengkapnya
                    </p>
                </div>
                <span className="clients__subtitle section-text">
                    Mereka yang telah menjadi pengunjung tetap kami
                </span>
                <div className="work__inner">
                    <div className="works-card">
                        <span className="works-card__year">
                            2021
                        </span>
                        <div className="works-card__info">
                        <h4 className="works-card__title section-text">
                        Mewarnai Bersama Anak Pesisir
                        </h4>
                        <p className="works-card__text">
                        Kegiatan yang kami adakan pada tahun 2021
                        </p>
                        </div>
                    </div>
                    <div className="works-card">
                        <span className="works-card__year">
                            Rutin
                        </span>
                        <div className="works-card__info">
                        <h4 className="works-card__title section-text">
                        Ngelapak Tiap Malam Minggu
                        </h4>
                        <p className="works-card__text">
                        Kegiatan rutin yang dilakukan setiap malam minngu
                        </p>
                        </div>
                    </div>
                    <div className="works-card">
                        <span className="works-card__year">
                            2021
                        </span>
                        <div className="works-card__info">
                        <h4 className="works-card__title section-text">
                        Donasi untuk Korban Erupsi Semeru
                        </h4>
                        <p className="works-card__text">
                        Erupsi Gunung Semeru menggugah kita untuk
                        </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Works;