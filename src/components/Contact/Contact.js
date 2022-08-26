import React from "react";
import Btn from "../btn/Btn";
import "../Contact/Contact.css"
const Contact=()=>{
    return(
        <>
        <section className="contact">
            <div className="container contact__container">
                <h3 className="contact__title">
                Ingin <span className="contact__title--active">Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?
                </h3>
                <p className="contact__text section-text">Percayakan melalui kegiatan kita</p>
                <Btn className="btn hero__btn">
                        Donasi dengan Kami
                        <svg className="btn-save" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 6.27999C15.9999 6.8817 15.7619 7.45898 15.338 7.88599C14.362 8.86999 13.415 9.89599 12.402 10.844C12.2889 10.947 12.1406 11.0027 11.9876 10.9995C11.8346 10.9964 11.6887 10.9346 11.58 10.827L8.662 7.88699C8.23784 7.45971 7.9998 6.88205 7.9998 6.27999C7.9998 5.67792 8.23784 5.10027 8.662 4.67299C8.87365 4.45977 9.12541 4.29054 9.40276 4.17506C9.68011 4.05958 9.97757 4.00013 10.278 4.00013C10.5784 4.00013 10.8759 4.05958 11.1532 4.17506C11.4306 4.29054 11.6823 4.45977 11.894 4.67299L12 4.77999L12.106 4.67299C12.4237 4.35185 12.8298 4.13252 13.2725 4.04291C13.7153 3.9533 14.1747 3.99747 14.5923 4.1698C15.0098 4.34212 15.3667 4.63481 15.6174 5.01059C15.8681 5.38637 16.0013 5.82826 16 6.27999V6.27999Z"
                                stroke="#008F76" stroke-width="1.5" stroke-linejoin="round" />
                            <path
                                d="M18 20L21.824 16.176C21.9366 16.0636 21.9999 15.9111 22 15.752V10.5C22 10.1022 21.842 9.72064 21.5607 9.43934C21.2794 9.15804 20.8978 9 20.5 9V9C20.1022 9 19.7206 9.15804 19.4393 9.43934C19.158 9.72064 19 10.1022 19 10.5V15"
                                stroke="#008F76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M18 16L18.858 15.142C18.9031 15.097 18.9388 15.0435 18.9632 14.9847C18.9876 14.9258 19.0001 14.8627 19 14.799C18.9999 14.7091 18.9747 14.621 18.9274 14.5445C18.8801 14.468 18.8124 14.4062 18.732 14.366L18.289 14.145C17.9137 13.9573 17.4889 13.8925 17.0747 13.9596C16.6604 14.0267 16.2778 14.2224 15.981 14.519L15.086 15.414C14.7109 15.789 14.5001 16.2976 14.5 16.828V20M6 20L2.176 16.176C2.06345 16.0636 2.00014 15.9111 2 15.752V10.5C2 10.1022 2.15804 9.72064 2.43934 9.43934C2.72064 9.15804 3.10218 9 3.5 9V9C3.89782 9 4.27936 9.15804 4.56066 9.43934C4.84196 9.72064 5 10.1022 5 10.5V15"
                                stroke="#008F76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M6 16L5.142 15.142C5.09697 15.0969 5.06125 15.0435 5.03688 14.9846C5.01252 14.9258 4.99999 14.8627 5 14.799V14.799C5 14.616 5.104 14.449 5.268 14.366L5.711 14.145C6.08631 13.9573 6.51114 13.8925 6.92534 13.9596C7.33955 14.0267 7.72216 14.2224 8.019 14.519L8.914 15.414C9.2891 15.789 9.49989 16.2976 9.5 16.828V20"
                                stroke="#008F76" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Btn>
                    <p className="contact__text section-text contact-btn__middle">Atau</p>
                    <Btn className="btn hero__btn">
                    Hubungi Kami
                    <img src="./images/btn-call.png" alt="btn call" className="btn-call" />
                    </Btn>
            </div>
        </section>
        </>
    )
}
export default Contact;