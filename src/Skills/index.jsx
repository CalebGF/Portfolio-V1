import React from "react";
import { LanguageContext } from "../LanguageProvider";
import { useContext } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills() {    
    const { t } = useContext(LanguageContext);

    const skillNames = ['css', 'firebase', 'git', 'html', 'javascript', 'node', 'postgresql', 'react', 'tailwindcss']; 
    const skillLogos = skillNames.map(name => `./src/assets/images/skill-logos/${name}-logo.svg`); 

    return (
        <div className="container-fluid skills">
            <h3 className="text-center py-4">{t("skills")}</h3>
            <div className="row">
                { skillLogos.map((logo, i) => (
                    <div className="col-4 col-md-2 pt-3">
                        <SkillCard key={i} logo={logo} name={skillNames[i]} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;