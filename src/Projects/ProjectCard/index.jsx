import React from "react";
import { LanguageContext } from '../../LanguageProvider';
import { useContext } from 'react';

function ProjectCard({ 
        name,
        linkDep,
        linkGit 
    }) {
    const { t } = useContext(LanguageContext);
    const imageSrc = `./images/project-images/${name}.webp`;
    return (
        <div className="card project-card">
            <img src={imageSrc} className="card-img-top project-image" alt={"Website " + name} />
            <div className="card-body project-hover">
                
                <h5 className="card-title text-center pb-3">{name.toUpperCase()}</h5>
                
                <p className="card-text text-center">{t('description1')}</p>

                <div className="project-links row justify-content-center">
                    <div className="col-4 mx-4">
                        <a href={linkDep} className="btn project-btn">Website</a>
                    </div>
                    <div className="col-4">
                        <a href={linkGit} className="btn project-btn">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;