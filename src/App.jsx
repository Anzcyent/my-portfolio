import React from "react";
import "./App.css";
import "./keyframes.css";

import { Footer, Navbar } from "./components";
import {
  Blog,
  Contact,
  Description,
  Hero,
  Projects,
  Skills,
} from "./containers";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
