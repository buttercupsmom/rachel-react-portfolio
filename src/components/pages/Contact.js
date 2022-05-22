import React from "react";
import "../Contact.css";
import "../main.css";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <fieldset className="container">
        <legend>Contact</legend>
        {/* <Link to="/contact">Contact</Link> */}
        <ul>
          <li>
            <a
              href="https://github.com/buttercupsmom"
              target="{_blank}"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rachelehaddad/"
              target="{_blank}"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="tel:7736770024"
              target="{_blank}"
              rel="noopener noreferrer"
            >
              773.677.0024
            </a>
          </li>
          <li>
            <a
              href="mailto:yarkony.rachel@gmail.com"
              target="{_blank}"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
          <li href="#resume">
            <a
              href="https://docs.google.com/document/d/1X41EEi76ObMWuU3gg6Rn042EGSM_k7YO-PbP_cxsOKs/edit?usp=sharing"
              target="{_blank}"
              rel="noopener noreferrer"
            >
              Resume --click to download!
            </a>
          </li>
        </ul>

        {/* aside */}
        <form className="form">
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Name"
          ></input>
          <input
            className="input"
            name="email"
            type="text"
            placeholder="Email"
          ></input>
          <textarea
            className="textarea"
            name="text"
            placeholder="Say Hey!"
          ></textarea>
          <button className="button" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </fieldset>
    </>
  );
};

export default Contact;
