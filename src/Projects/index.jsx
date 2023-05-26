import React from 'react';
import { LanguageContext } from '../LanguageProvider';
import { useContext } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    const { t } = useContext(LanguageContext);
    return (
        <section className="projects" id="projects">
            <div className="container">
                <h3 className='text-center section-heading'>{t('projects')}</h3>
                <div className="row">
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <ProjectCard 
                            name="react-shop" 
                            description={t('react-shop')}
                            linkDep="https://calebgf.github.io/Ecommerce-React/" 
                            linkGit="https://github.com/CalebGF/Ecommerce-React/"
                        />
                    </div>

                    <div className="col-12 col-md-6 col-xl-6">
                        <ProjectCard 
                            name="simon-says" 
                            description={t('simon-says-description')}
                            linkDep="https://calebgf.github.io/Simon-Says/" 
                            linkGit="https://github.com/CalebGF/Simon-Says/"
                        />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Projects;

