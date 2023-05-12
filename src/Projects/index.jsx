import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    const { t } = useContext(LanguageContext);
    return (
        <div className="container-fluid projects">
            <h3 className='text-center py-4'>{t('projects')}</h3>
            <div className="row justify-content-between">
                <div className="col-12 col-md-4 justify-content-center">
                    <ProjectCard name="simon-says" />
                </div>
                <div className="col-12 col-md-4 justify-content-center">
                    <ProjectCard name="simon-says" />
                </div>
                <div className="col-12 col-md-4 justify-content-center">
                    <ProjectCard name="simon-says" />
                </div>
            </div>
        </div>
    )
}

export default Projects;

