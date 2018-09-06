import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { title, tech, description, image, webLink, gitLink } = project;
  return (
    <div className="card">
      <div className="card-info">
        <h1 className="card-title">{title}</h1>
        <h3 className="card-tech">{tech}</h3>
        <p className="card-description">{description}</p>
        <div className="card-button-container">
          <a
            target="_blank"
            name="web-link"
            rel="noopener noreferrer"
            href={webLink}
          >
            Website
          </a>
          <a
            target="_blank"
            name="github-link"
            rel="noopener noreferrer"
            href={gitLink}
          >
            Github
          </a>
        </div>
      </div>
      <div className="card-image-container">
        <a
          target="_blank"
          name="web-link-image"
          rel="noopener noreferrer"
          href={webLink}
        >
          <img className="card-image" src={image} alt="playlist-converter" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
