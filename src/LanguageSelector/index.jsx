import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import spainFlag from '../../public/images/flags/es.svg';
import ukFlag from '../../public/images/flags/gb.svg';
import './LanguageSelector.css';

function LanguageSelector() {
  const { changeLanguage } = React.useContext(LanguageContext);

  return (
    <>
    <li className="nav-item">
        <a className="nav-link" href="#">
            <img src={spainFlag}
                onClick={() => changeLanguage('es')} 
                alt="Spain Flag"
                className='flag-icon' 
            />
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">
            <img src={ukFlag}
                onClick={() => changeLanguage('en')} 
                alt="UK Flag"
                className='flag-icon' 
            />
        </a>
    </li>
    </>
  );
}

export default LanguageSelector;
