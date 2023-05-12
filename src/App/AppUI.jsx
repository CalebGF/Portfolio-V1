import React from 'react'
import LanguageProvider from '../LanguageProvider';
import  Header  from '../Header';
import AboutMe from '../AboutMe';
import Skills from '../Skills';


function AppUI() {

    return (
        <LanguageProvider>
            <Header />
            <AboutMe />
            <Skills />
        </LanguageProvider>
    )
}

export default AppUI;