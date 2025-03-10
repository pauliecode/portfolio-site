import React from 'react';
import "./qualification.css";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Qualification = () => {
    const { t } = useTranslation();
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <section className="qualification section">
            <h2 className="section__title">{t('Qualifikationen')}</h2>
            <span className="section__subtitle">{t('Mein Werdegang')}</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{t('Bildungsweg')}
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{t('Berufserfahrung')}
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t('Fachinformatikerin')}<br/>{t('Softwareentwicklung')}</h3>
                                <span className="qualification__subtitle">Flensburg - Eckener Schule </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 08/2021 - 07/2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{t('Computerysteme und Netzwerke')}</h3>
                                <span className="qualification__subtitle">Huesca, {t('Spanien')} - IES San Alberto Mango</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2019 (Interrupted)
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{t('Softwareentwicklerin')}</h3>
                                <span className="qualification__subtitle">Flensburg - CODIN IT </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 01/2025 - Heute
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t('Softwareentwicklerin')}</h3>
                                <span className="qualification__subtitle">Kiel - Bartels-Langness </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 09/2024 - 10/2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{t('Softwareentwicklerin')} | {t('Ausbildung')}</h3>
                                <span className="qualification__subtitle">Flensburg - lambda9 GmbH </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 08/2021 - 07/2024
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Video Producer</h3>
                                <span className="qualification__subtitle">Flensburg - Lace Lingerie </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 02/2021 - 04/2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification