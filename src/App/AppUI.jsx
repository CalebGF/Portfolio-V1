import React from 'react'
import LanguageProvider from '../LanguageProvider';
import  Header  from '../Header';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';


function AppUI() {

    return (
        <LanguageProvider>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
        </LanguageProvider>
    )
}

export default AppUI;