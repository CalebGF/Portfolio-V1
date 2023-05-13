import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import './AboutMe.css';

function AboutMe() {
    const { t } = useContext(LanguageContext);
    return (
        <div className=' container-fluid about-me'>
            <h3 className="text-center pt-3">{t('aboutMe')}</h3>
            <div className="row">
                <div className="col-12 col-md-8">  
                    <p className="text-justify">{t('aboutMeText')}</p>
                </div>
                <div className="col-12 col-md-4">
                    <img className="img-fluid" src="./images/selfie.png" alt="Selfie of Caleb" border="0" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;