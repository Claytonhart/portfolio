import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Main.css";

const Main = props => {
  return (
    <div className="title-page">
      <section className="title-container">
        <h1 className="title-name">Clayton Hart</h1>
        <h3 className="title-description">Front End Developer</h3>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Claytonhart"
          >
            <i className="fa fa-github" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/clayton-hart-3a50a716b/"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:claytonhart345@gmail.com"
          >
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
        </div>
        <div className="title-down-arrow">
          <AnchorLink href="#projects">
            <i className="fa fa-arrow-down" aria-hidden="true" />
          </AnchorLink>
        </div>
      </section>
    </div>
  );
};

export default Main;
