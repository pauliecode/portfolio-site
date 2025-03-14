import React from 'react'
import { useTranslation } from 'react-i18next';

const Frontend = () => {
    const { t } = useTranslation();
    return (
        <div className="skills__content">
            <h3 className="skills__title">{t('Frontend Entwicklerin')}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">TypeScript</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">Angular</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">Vue.js</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div>
                            <h3 className="skills__name">CSS/Tailwind</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend