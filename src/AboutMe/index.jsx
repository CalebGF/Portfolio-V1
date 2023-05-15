import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import './AboutMe.css';

function AboutMe() {
    const { t } = useContext(LanguageContext);
    return (
        <section className='about-me'>
            <div className="container">
                <h3 className="section-heading">{t('aboutMe')}</h3>
                <div className="row about-row">
                    <div className="col-12 col-md-8">  
                        <p className="">{t('aboutMeText')}</p>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <img className="img-fluid" src="./images/selfie.png" alt="Selfie of Caleb" border="0" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;