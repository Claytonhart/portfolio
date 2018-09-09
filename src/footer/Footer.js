import React from "react";

import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      <p>
        Resume at{" "}
        <span>
          <a
            className="footer-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1WM1scjNltOWP-SQDfcD-e8IPzQIXuadJF4fvFrdS1ck/edit?usp=sharing"
          >
            resume
          </a>
        </span>{" "}
        and email at <span>claytonhart345@gmail.com</span>
      </p>
    </footer>
  );
};

export default Footer;
