import React from "react";
import "../Team/Team.css"
import TeamCard from "../TeamCard/TeamCard";
const Team=()=>{
    return(
        <>
        <section className="team">
            <div className="container">
                <h2 className="team__title section-title">
                Kenapa Kita <span className="section-title--active">Haruc</span> Membaca Buku?
                </h2>
                <div className="team-cards">
            <TeamCard className="card-box">
                <p className="team-card__text section-text">
                “Aku rela dipenjara asalkan <span className="section-text--active">bersama buku</span>, karena dengan buku <span className="section-text--active">aku bebas</span>”
                </p>
                <div className="team-card__info">
                    <img src="./images/person1.png" alt="team member" className="taem-card__img"/>
                    <div className="team-card__info-inner">
                        <h4 className="team-card__title section-text">
                        Mohammad Hatta
                        </h4>
                        <p className="team-card__desc section-text">
                        Wakil Presiden Indonesia Pertama
                        </p>
                    </div>
                </div>
            </TeamCard> 
            <TeamCard className="card-box">
                <p className="team-card__text section-text">
                “Cuma perlu <span className="section-text--active">
                satu buku</span> untuk jatuh cinta pada membaca, Cari Buku itu! <span className="section-text--active">
                Mari jatuh cinta!
                </span>
                </p>
                <div className="team-card__info team-card__info--active">
                    <img src="./images/person2.png" alt="team member" className="taem-card__img"/>
                    <div className="team-card__info-inner">
                        <h4 className="team-card__title section-text">
                        Najwa Shihab
                        </h4>
                        <p className="team-card__desc section-text">
                        Duta Membaca
                        </p>
                    </div>
                </div>
            </TeamCard> 
            </div>
            </div>
        </section>
        </>
    )
}
export default Team;