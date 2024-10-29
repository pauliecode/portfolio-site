import React from 'react';
import "./contact.css";

const Contact = () => {



    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Tritt in Kontakt mit mir</h2>
            <span className="section__subtitle">Gerne kontaktiere mich!</span>

            <div className="contact__container container grid">
                <div className="contact__content">

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">pau9ale@gmail.com</span>

                            <a href="mailto:pau9ale@@gmail.com" className="contact__button">Schreib mir <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact