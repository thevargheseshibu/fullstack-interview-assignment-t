import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { useState } from "react";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app-grid">
        <header className="app-nav">
          <Nav />
        </header>

        <main className="app-main">
          <Routes />
        </main>

        <footer className="app-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
