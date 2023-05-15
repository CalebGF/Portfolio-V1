import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    const { t } = useContext(LanguageContext);
    return (
        <section className="projects">
            <div className="container">
                <h3 className='text-center section-heading'>{t('projects')}</h3>
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                        <ProjectCard name="simon-says" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects;

