import React from "react";
import "./SkillCard.css";

function SkillCard(props) {
    const skill = props;
    console.log(skill.logo);
    return (
        <div className="card skill-card">
            <img src={skill.logo} alt="React logo" srcset="" />
            <div className="card-body">
                <div className="card-title">
                    <p className="card-text text-center">
                        {skill.name.toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;