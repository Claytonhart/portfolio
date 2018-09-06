import React, { Component } from "react";

import Main from "./main/Main";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
