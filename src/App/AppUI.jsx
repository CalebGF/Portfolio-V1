import React from 'react'
import  Header  from '../Header';
import AboutMe from '../AboutMe';
import LanguageProvider from '../LanguageProvider';


function AppUI() {

    return (
        <LanguageProvider>
            <Header />
            <AboutMe />
        </LanguageProvider>
    )
}

export default AppUI;