import React from 'react'
import LanguageProvider from '../LanguageProvider';
import  Header  from '../Header';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import './AppUI.css';

function AppUI() {

    return (
        <div className="container">
            <LanguageProvider>
                <Header />
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </LanguageProvider>
        </div>
    )
}

export default AppUI;