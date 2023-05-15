import React from "react";
import { LanguageContext } from "../LanguageProvider";
import { useContext } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills() {    
    const { t } = useContext(LanguageContext);

    const skillNames = ['react', 'node', 'git', 'html', 'css', 'javascript', 'tailwindcss', 'postgresql', 'firebase']; 
    const skillLogos = skillNames.map(name => `./images/skill-logos/${name}-logo.svg`); 

    return (
        <section className="skills" id="skills">
            <div className="container">
                <h3 className="section-heading">{t("skills")}</h3>
                <div className="row">
                    { skillLogos.map((logo, i) => (
                        <div className="col-4 col-md-2 pt-3">
                            <SkillCard key={i} logo={logo} name={skillNames[i]} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;