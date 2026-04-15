import balloons from './assets/logo.png';
import Menu from './components/menu.tsx';
import Hero from './components/hero.tsx';
import PartyTypes from './components/partyTypes.tsx';

function App() {
  return (
    <div>
      <div className="section">
  <p className="line">
    <span>✨</span>
    <span>We offer holiday programs for all ages</span>
    
    <span>✨</span>
    <span>Пропонуємо святкові програми для будь-якого віку</span>
  </p>
</div>
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",      // center horizontally ✅
        justifyContent: "flex-start", // top position ✅
        paddingTop: "40px",
        
    }}>
      
      <img style={{ width: "120px" , marginBottom: "10px" }} src={balloons} alt="balloons" />
    </div>
    <Menu />
    <Hero />
    <PartyTypes/>

    </div>
  );
}

export default App;
