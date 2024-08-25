import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";

// A wrapper component to conditionally render Footer
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const shouldShowFooter = location.pathname !== "/dashboard"; // Hide footer on dashboard route

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-wrapper">
        {children}
      </main>
      {shouldShowFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
};

export default App;
