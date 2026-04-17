import { Routes, Route } from "react-router-dom";
import balloons from './assets/logo.png';
import Menu from './components/menu';
import Hero from './components/hero';
import PartyTypes from './components/partyTypes';
import Contacts from "./Pages/Contacts";

function Home() {
  return (
    <div>
      <div className="section">
        <p>✨ We offer holiday programs for all ages</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "40px",
        }}
      >
        <img
          style={{ width: "120px", marginBottom: "10px" }}
          src={balloons}
          alt="balloons"
        />
      </div>

      <Menu />

      <div id="about">
        <Hero />
      </div>

      <div id="activities">
        <PartyTypes />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  );
}

export default App;