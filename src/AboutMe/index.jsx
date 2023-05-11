import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import './AboutMe.css';

function AboutMe() {
    const { t } = useContext(LanguageContext);
    return (
        <div className=' container-fluid about-me'>
            <h3 className="text-center pt-3">{t('aboutMe')}</h3>
        </div>
    )
}

export default AboutMe;