import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import spainFlag from '../assets/images/flags/es.svg';
import ukFlag from '../assets/images/flags/gb.svg';
import './LanguageSelector.css';

function LanguageSelector() {
  const { changeLanguage } = React.useContext(LanguageContext);

  return (
        <div className="row languages-icons justify-content-between">
            <div className="col-5">
                <img src={spainFlag}
                    onClick={() => changeLanguage('es')} 
                    alt="Spain Flag" width="30" 
                />
            </div>
            <div className="col-5">     
                <img src={ukFlag}
                    onClick={() => changeLanguage('en')}
                    alt="UK Flag" width="30" 
                />

            </div>
            

        </div>
  );
}

export default LanguageSelector;
