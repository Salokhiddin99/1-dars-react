import React from "react";
import Btn from "../btn/Btn";
import "../Header/Header.css"
const Header=()=>{
return(
<>
    <header className="header">
        <div className="container">
            <nav className="nav">
                <a href="#">
                    <img src="./images/header-logo.svg" alt="header logo" />
                </a>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link nav__link-active">Beranda</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Koleksi</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Syarat dan Ketentuan</a></li>
                </ul>
                <Btn className="btn">
                    Masuk
                </Btn>
            </nav>
        </div>
    </header>
</>
)
}
export default Header;