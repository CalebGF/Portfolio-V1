import './Header.css';
import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import LanguageSelector from '../LanguageSelector';

function Header() {
    const { t } = useContext(LanguageContext);
    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
                <div className="container-fluid justify-content-between">
                    <a className="navbar-brand " href="#">
                        <img src="./images/logo.png" alt="" width="40" height="34" className="d-inline-block align-text-top"/>
                        Caleb González Flores
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 text-center">
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
                                <a className="nav-link" href="#contact">
                                    <LanguageSelector />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 className='header-Heading'>{t('welcome')}</h1>
        </header>
    );
}

export default Header;