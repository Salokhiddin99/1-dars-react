import React from "react";
import { Icon } from 'react-icons-kit'
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import Arrow from "../arrows/Arrows";
import "../HappyClients/Clients.css"
import TeamCard from "../TeamCard/TeamCard";
const Clients=()=>{
    return(
        <>
        <section className="clients">
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
                <div className="clients-box">
                <Arrow className={"arrow-box"}>
                    <Icon icon={chevronLeft}></Icon>
                    </Arrow>
                    <Arrow className={"arrow-right"}>
                    <Icon icon={chevronRight}></Icon>
                </Arrow>
                <TeamCard className="clients-card">
                <p className="team-card__text section-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="team-card__info--active clients-card__info">
                    <img src="./images/person3.png" alt="client" className="taem-card__img"/>
                    <div className="team-card__info-inner">
                        <h4 className="team-card__title section-text">
                        Guy Hawkins
                        </h4>
                        <p className="team-card__desc section-text">
                        32 Tahun, Karyawan
                        </p>
                    </div>
                </div>
            </TeamCard> 
            <TeamCard className="clients-card">
                <p className="team-card__text section-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="team-card__info team-card__info--active">
                    <img src="./images/person4.png" alt="client" className="taem-card__img"/>
                    <div className="team-card__info-inner">
                        <h4 className="team-card__title section-text">
                        Brooklyn Simmons
                        </h4>
                        <p className="team-card__desc section-text">
                        20 Tahun, Mahasiswa
                        </p>
                    </div>
                </div>
            </TeamCard>
                </div>
                <div className="dots">
                    <span className="circle circle--active"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
            </div>
        </section>
        </>
    )
}
export default Clients;