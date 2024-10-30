import React, { useState } from 'react';
import "./header.css";
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [language, setLanguage] = useState('de');
    const { t } = useTranslation();
    //! *************  Change Background Header  *******************
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header")
        }else{
            header.classList.remove("scroll-header");
        }
    });

    function toggleLanguage() {
        const currentLanguage = i18next.language;
        const newLanguage = currentLanguage === 'en' ? 'de' : 'en';

        i18next
            .changeLanguage(newLanguage)
            .then((t) => {
                setLanguage(newLanguage)
                console.log(t('key')); // Replace 'key' with your actual translation key
            });
    }


    //! *************  Toggle Menu  *******************
    const[Toggle,showMenu]=useState(false);
    const [activeNav, setActiveNav]=useState("#home")



  return (
    <header className="header">
        <nav className="nav container">
            <a href="#home" className="nav__logo">Paula G</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav("#home")}
                           className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")}
                           className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i>{t('Über mich')}
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")}
                           className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                           className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")}
                           className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i>{t('Kontakt')}
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => toggleLanguage()}>
                <button>
                    <svg className="flag__icon" xmlns="http://www.w3.org/2000/svg" height="512" width="512"
                         viewBox="0 0 512 512">
                        {language === 'de' ? (
                            <>
                                {/* English Flag SVG */}
                                {/*<path fill="#006" d="M0 0h1000.02v500.01H0z"/>*/}
                                {/*<path d="M0 0v55.903l888.218 444.11h111.802V444.11L111.802.003H0zm1000.02 0v55.9L111.802 500.01H0v-55.9L888.218 0h111.802z" fill="#fff"/>*/}
                                {/*<path d="M416.675 0v500.01h166.67V0h-166.67zM0 166.67v166.67h1000.02V166.67H0z" fill="#fff"/>*/}
                                {/*<path d="M0 200.004v100.002h1000.02V200.004H0zM450.01 0v500.01h100V0h-100zM0 500.01l333.34-166.67h74.535L74.535 500.01H0zM0 0l333.34 166.67h-74.535L0 37.27V0zm592.145 166.67L925.485 0h74.535L666.68 166.67h-74.535zm407.875 333.34L666.68 333.34h74.535l258.805 129.403v37.267z" fill="#c00"/>*/}
                                <defs>
                                    <clipPath id="a">
                                        <path fillOpacity=".67" d="M250 0h500v500H250z"/>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#a)" transform="translate(-256) scale(1.024)">
                                    <g strokeWidth="1pt">
                                        <path fill="#006" d="M0 0h1000.02v500.01H0z"/>
                                        <path
                                            d="M0 0v55.903l888.218 444.11h111.802V444.11L111.802.003H0zm1000.02 0v55.9L111.802 500.01H0v-55.9L888.218 0h111.802z"
                                            fill="#fff"/>
                                        <path d="M416.675 0v500.01h166.67V0h-166.67zM0 166.67v166.67h1000.02V166.67H0z"
                                              fill="#fff"/>
                                        <path
                                            d="M0 200.004v100.002h1000.02V200.004H0zM450.01 0v500.01h100V0h-100zM0 500.01l333.34-166.67h74.535L74.535 500.01H0zM0 0l333.34 166.67h-74.535L0 37.27V0zm592.145 166.67L925.485 0h74.535L666.68 166.67h-74.535zm407.875 333.34L666.68 333.34h74.535l258.805 129.403v37.267z"
                                            fill="#c00"/>
                                    </g>
                                </g>
                            </>
                        ) : (
                            <>
                                {/* German Flag SVG */}
                                <path fill="#ffce00" d="M0 341.338h512.005v170.67H0z"/>
                                <path d="M0 0h512.005v170.67H0z"/>
                                <path fill="#d00" d="M0 170.67h512.005v170.668H0z"/>
                            </>
                        )}
                    </svg>
                </button>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>

        </nav>
    </header>
  )
}

export default Header