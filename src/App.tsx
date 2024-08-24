import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App: React.FC = () => {
  return (
    <Router>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-wrapper">
          <Main />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
