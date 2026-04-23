import { Routes, Route } from "react-router-dom";
import balloons from './assets/logo.png';
import Menu from './components/menu';
import Hero from './components/hero';
import PartyTypes from './components/partyTypes';
import Contacts from "./Pages/Contacts";
import { FaInstagram } from "react-icons/fa";
import Footer from "./components/footer";

function Home() {
  return (
    <div>
      <div
  className="section"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  }}
>
  <p style={{ margin: 0 }}>
    ✨ We offer holiday programs for all ages
  </p>

  <a
    href="https://www.instagram.com/happy_party_event_agency/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "28px",
      color: "#E1306C",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <FaInstagram />
  </a>
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

      <Footer />
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