import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../Contact.css";
import "../main.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <fieldset className="container">
        <h1 className="contact-title">Contact</h1>
        <ul>
          <li>
            <span>
              <a
                className="contact-me"
                href="https://github.com/buttercupsmom"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                className="contact-me"
                href="https://www.linkedin.com/in/rachelehaddad/"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </li>
          <li>
            <span>
              {" "}
              <a
                className="contact-me"
                href="tel:7736770024"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                773.677.0024
              </a>
            </span>
          </li>
          <li>
            <span>
              {" "}
              <a
                className="contact-me"
                href="mailto:yarkony.rachel@gmail.com"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </span>
          </li>
          <li className="contact-me" href="#resume">
            <span>
              {" "}
              <a
                href="https://docs.google.com/document/d/1X41EEi76ObMWuU3gg6Rn042EGSM_k7YO-PbP_cxsOKs/edit?usp=sharing"
                target="{_blank}"
                rel="noopener noreferrer"
              >
                Resume --click to download!
              </a>
            </span>
          </li>
        </ul>

        <form className="form" method="POST">
          <input
            onChange={handleInputChange}
            value={name}
            className="input"
            name="name"
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={handleInputChange}
            className="input"
            name="email"
            value={email}
            type="text"
            placeholder="Email"
          ></input>
          <input
            className="textarea"
            onChange={handleInputChange}
            name="text"
            value={message}
            placeholder="Say Hey!"
          ></input>
          <button className="button" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </fieldset>
    </>
  );
}

export default Contact;
