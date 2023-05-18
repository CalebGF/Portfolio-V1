import React from "react";
import { LanguageContext } from "../LanguageProvider";
import { useContext } from "react";
import "./Contact.css";

function Contact() {
    const { t } = useContext(LanguageContext);
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h3 className="text-center section-heading">{t("contact")}</h3>
                
                <div className="row">
                    <div className="col-12">
                        <p className="text-center contact-text">
                            {t("contactText")}
                        </p>
                    </div>
                </div>

                <div className="row text-center contact-links">
                    <div className="col-6">
                        <a href="https://www.linkedin.com/in/caleb-gonzalez-flores/" className="contact-icon">
                            <div className="row">
                                    <i className="fab fa-linkedin"></i>
                            </div>
                            <div className="row">
                                <p className="text-center">Linkedin</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-6">
                        <a href="https://github.com/CalebGF" className="contact-icon">
                            <div className="row">
                                    <i className="fab fa-github primary-blue" ></i>
                            </div>
                            <div className="row">
                                <p className="text-center">GitHub</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;