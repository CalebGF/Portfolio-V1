import React from "react";

function SkillCard(props) {
    const skill = props;
    return (
        <div className="skill-card">
            <img src={skill.logo} className="skill-image" alt="React logo" />
            <p className="skill-title text-center">
                {skill.name.toUpperCase()}
            </p>
        </div>
    );
}

export default SkillCard;