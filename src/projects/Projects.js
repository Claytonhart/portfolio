import React from "react";

import "./Projects.css";

import playlistconverterimage from "../images/playlist-converter-small.jpg";
import booksearchimage from "../images/book-search-small.jpg";
import cryptogramimage from "../images/cryptogram-small.jpg";

import ProjectCard from "./projectcard/ProjectCard";

const Projects = () => {
  const p1 = {
    title: "Playlist Converter",
    tech: "React, Redux, React Router, Redux Thunk, HTML5, CSS3",
    description: `This Playlist Converter was a project intially designed to convert my
    music library from Youtube to Spotify. It grew to accommodate four platforms which
    each have a public api with client side authentication and authorization. I'd like
    to include services such as Google Music, Soundcloud, Amazon Music, etc. However, 
    each of these platforms seemed to either only allow server side authentication, or
    did not have a publicly accessible api at the moment (Soundcloud).`,
    image: playlistconverterimage,
    webLink: "https://claytonhart.github.io/playlist-converter/",
    gitLink: "https://github.com/Claytonhart/playlist-converter"
  };

  const p2 = {
    title: "Book Search",
    tech: "React, React Router, HTML5, CSS3",
    description: `Book Search pulls from the Google Books api to allow users to search for
    any book by title. Unfortunately, the api is rather limited and does not allow much
    customization of search paramaters, however, the intent of the project was to practice
    flexbox and responsive design in the React ecosystem.`,
    image: booksearchimage,
    webLink: "https://claytonhart.github.io/book-search/",
    gitLink: "https://github.com/Claytonhart/book-search"
  };

  const p3 = {
    title: "Cryptograms",
    tech: "React, HTML5, CSS3",
    description: `This simple Cryptogram creator encrypts a random short quote with a 
    substitution cipher. Each letter is linked to all instances of the same letter, so 
    users do not have to search for each instance of a letter.`,
    image: cryptogramimage,
    webLink: "https://claytonhart.github.io/cryptograms/",
    gitLink: "https://github.com/Claytonhart/cryptograms/"
  };

  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">Projects</h1>
      <ProjectCard project={p1} />
      <ProjectCard project={p2} />
      <ProjectCard project={p3} />
    </section>
  );
};

export default Projects;
