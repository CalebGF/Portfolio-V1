import React from "react";
import { LanguageContext } from '../../LanguageProvider';
import { useContext } from 'react';

function ProjectCard({ 
        name,
        link 
    }) {
    const { t } = useContext(LanguageContext);
    const imageSrc = `./src/assets/images/project-images/${name}.jpeg`;
    return (
        <div className="card project-card">
            <img src={imageSrc} className="card-img-top" alt={"Website " + name} />
            <div className="card-body project-hover">
                
                <h5 className="card-title text-center pb-3">{name.toUpperCase()}</h5>
                
                <p className="card-text text-center">{t('description1')}</p>

                <div className="project-links row justify-content-center">
                    <div className="col-4 mx-4">
                        <a href={link} className="btn btn-primary">Website</a>
                    </div>
                    <div className="col-4">
                        <a href={link} className="btn btn-primary">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;