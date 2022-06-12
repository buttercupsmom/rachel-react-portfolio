import React from "react";
import "../Contact.css";
import "../main.css";

function Contact() {
  return (
    <>
      <fieldset className="container">
        <h1 className="contact-title">Contact Me!</h1>
        <div className="sources">
          <ul>
            <li data-text="Github">
              <a
                className="contact-me"
                href="https://github.com/buttercupsmom"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </li>
            <li data-text="Linkedin">
              <a
                className="contact-me"
                href="https://www.linkedin.com/in/rachelehaddad/"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"> </i> Linkedin
              </a>
            </li>
            <li data-text="Cell">
              {" "}
              <a
                className="contact-me"
                href="tel:7736770024"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-mobile-button"></i> 773.677.0024
              </a>
            </li>
            <li data-text="Email">
              {" "}
              <a
                className="contact-me"
                href="mailto:yarkony.rachel@gmail.com"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fa-solid fa-at"> </i> Email
              </a>
            </li>
            <li className="contact-me" href="#resume">
              {" "}
              <a
                href="https://docs.google.com/document/d/1X41EEi76ObMWuU3gg6Rn042EGSM_k7YO-PbP_cxsOKs/edit?usp=sharing"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                {" "}
                <i className="fa-thin fa-file-arrow-down"></i> Resume --click to
                view!
              </a>
            </li>
          </ul>
        </div>
      </fieldset>
    </>
  );
}

export default Contact;
