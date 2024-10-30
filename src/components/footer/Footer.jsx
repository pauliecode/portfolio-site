import React from 'react';
import "./footer.css";
import logo from "../../assets/PGlogo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">

            <div className="footer__container container">
                <div>
                    <img className='logo' src={logo} alt="logo" />
                </div>
                <div>
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">{t('Über mich')}</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">{t('Projekte')}</a>
                        </li>

                    </ul>

                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/paula-alemany-gotor-3705641b8/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="https://github.com/pauliecode" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>

                    <span className='footer__copy' >&#169; All rigths reserved</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer