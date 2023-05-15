import React from "react";

function SkillCard(props) {
    const skill = props;
    console.log(skill.logo);
    return (
        <div className="skill-card">
            <img src={skill.logo} className="skill-image" alt="React logo" srcset="" />
            <div className="skill-title">
                <p className="card-text text-center">
                    {skill.name.toUpperCase()}
                </p>
            </div>
        </div>
    );
}

export default SkillCard;