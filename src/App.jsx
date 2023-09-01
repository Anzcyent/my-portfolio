import React, { useState } from "react";
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
  CV,
} from "./containers";

const App = () => {
  const [isOpenedQA, setOpenedQA] = useState(false);
  const lang = localStorage.getItem("lang");

  if (!lang) localStorage.setItem("lang", "en");

  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Skills />
      <Projects />
      <QA setOpenedQA={setOpenedQA} />
      <CV isOpenedQA={isOpenedQA} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
