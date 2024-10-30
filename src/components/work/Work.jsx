import React from 'react';
import Works from "./Works";
import "./work.css"
import { useTranslation } from 'react-i18next';

const Work = () => {
    const { t } = useTranslation();
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">{t('Meine letzten Projekte')}</span>

        <Works />
    </section>
  )
}

export default Work