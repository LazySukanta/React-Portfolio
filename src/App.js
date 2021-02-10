import React from "react";
import "./App.css";
import NavControl from "./components/navbar";
import About from "./components/About";
import Work from "./components/work";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/skills";
import "./Nav.css";


const headers = {
}
function App() {
  return (
    <div className="App">
      <NavControl />
      <div className="abc" style={{}}>
        <Header />
      </div>
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
