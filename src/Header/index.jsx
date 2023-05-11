import './Header.css';
import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import LanguageSelector from '../LanguageSelector';

function Header() {
    const { t } = useContext(LanguageContext);
    return (
        <header className="container-fluid">
            
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-overlay navbar-transparent row">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <a className="navbar-brand" href="#">
                                <img src="src/assets/images/logo.png" alt="" width="40" height="34" className="d-inline-block align-text-top"/>
                                Caleb González Flores
                            </a>
                        </div>

                        <div className="col-8">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto my-2 mb-lg-0 text-center">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#aboutMe">{t('aboutMe')}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#skills">{t('skills')}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#projects">{t('projects')}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">{t('contact')}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact"><LanguageSelector /></a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>


            <div className="welcome-header">

                <h1>{t('welcome')}</h1>
            </div>
        </header>
    );
}

export default Header;