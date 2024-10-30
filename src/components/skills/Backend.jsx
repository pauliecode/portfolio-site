import React from 'react'
import { useTranslation } from 'react-i18next';

const Backend = () => {
    const { t } = useTranslation();
  return (
    <div className="skills__content">
        <h3 className="skills__title">{t('Backend Entwicklerin')}</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Kotlin</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills__data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Node.js</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills__data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Payload</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills__data">
                <i className='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills__name">REST</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                <div className="skills__data">
                      <i className='bx bx-badge-check' ></i>

                      <div>
                          <h3 className="skills__name">PostgreSQL</h3>
                          <span className="skills__level">Intermediate</span>
                      </div>
                </div>
  
            </div>
        </div>
    </div>
  )
}

export default Backend