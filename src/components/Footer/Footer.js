import React from "react";
import "../Footer/Footer.css"
const Footer=()=>{
    return(
        <>
        <footer className="footer">
            <div className="container footer__container">
               <div className="footer__left">
                <a href="#" className="footer__logo">
                    <img src="./images/header-logo.svg" alt="logo" />
                    <span className="footer__logo-text">Pojok Baca Probolinggo</span>
                </a>
                <div className="footer-social">
                    <a href="footer-icon">
                        <img src="./images/instagram.svg" alt="instagram logo" />
                    </a>
                    <a href="footer-icon">
                        <img src="./images/facebook.svg" alt="facebook logo" />
                    </a>
                    <a href="footer-icon">
                        <img src="./images/youtube.svg" alt="youtube logo" />
                    </a>
                </div>
               </div>
               <div className="footer__right">
                <div className="footer__right-box">
                    <h4 className="footer__right-title">
                        Kontak
                    </h4>
                    <a href="#" className="footer__right-text section-text">
                    Email
                    </a>
                    <a href="#" className="footer__right-text section-text">
                    Alamat
                    </a>
                    <a href="#" className="footer__right-text section-text">
                    No. Rekening
                    </a>
                </div>
                <div className="footer__right-box">
                    <h4 className="footer__right-title">
                    Tentang Kami
                    </h4>
                    <a href="#" className="footer__right-text section-text">
                    Umum
                    </a>
                </div>
                <div className="footer__right-box">
                    <h4 className="footer__right-title">
                    Galery
                    </h4>
                    <a href="#" className="footer__right-text section-text">
                    Kegiatan 2018
                    </a>
                    <a href="#" className="footer__right-text section-text">
                    Kegiatan 2019
                    </a>
                    <a href="#" className="footer__right-text section-text">
                    Kegiatan 2020
                    </a>
                    <a href="#" className="footer__right-text section-text">
                    Kegiatan 2021
                    </a>
                </div>
               </div>
            </div>
            <div className="footer__end">
            <span className="footer__end-logo"><img src="./images/footerend.png" alt="footer end" /></span>
            <span className="footer__end-text">Pojok Baca Probolinggo 2022</span>
            </div>
        </footer>
        </>
    )
}
export default Footer;