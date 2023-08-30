import React from "react";
import "./App.css";
import "./keyframes.css";

import { Footer, Navbar } from "./components";
import {
  QA,
  Contact,
  Description,
  Hero,
  Projects,
  Skills,
  CV
} from "./containers";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Skills />
      <Projects />
      <QA />
      <CV />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
