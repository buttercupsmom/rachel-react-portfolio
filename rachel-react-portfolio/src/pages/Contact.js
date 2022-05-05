// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import React from "react";

function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <h1>CONTACT</h1>
        <ul>
          <li>
            <a href="https://github.com/buttercupsmom">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rachelehaddad/">LinkedIn</a>
          </li>
          <li>
            <a href="tel:7736770024">773.677.0024</a>
          </li>
          <li>
            <a href="mailto:yarkony.rachel@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1X41EEi76ObMWuU3gg6Rn042EGSM_k7YO-PbP_cxsOKs/edit?usp=sharing"
              target="{_blank}"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* aside */}
        <form>
          <input name="name" type="text" placeholder="Name"></input>
          <input name="email" type="text" placeholder="Email"></input>
          <textarea name="text" placeholder="Feedback!"></textarea>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
