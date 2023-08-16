import React from "react";
import "./App.css";

import { Footer, Navbar } from "./components";
import { Blog, Contact, Description, Hero, Skills } from "./containers";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
