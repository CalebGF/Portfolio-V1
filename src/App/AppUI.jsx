import React from 'react'
import { withTranslation } from 'react-i18next';
import i18n from './i18n';
import  Header  from '../Header';
import { AboutMe } from '../AboutMe';


function AppUI({ t }) {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <Header />
            <AboutMe />
            
        </>
    )
}

export default withTranslation()( AppUI );