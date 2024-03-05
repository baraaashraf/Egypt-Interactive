import Map from "./components/Map";
import Info from "./components/Info";
import Nav from "./components/Nav";
import { useState } from "react";
import { governorates } from "./areas";
import EgyFlag from "./assets/Egypt.png";
import Timeline from "./components/Timeline";

function App() {
  const [info, setInfo] = useState({
    id: "25",
    image: EgyFlag,
    title: "",
    area: "1,010,408",
    population: "102,060,688",
    capital: "القاهرة",
  });

  const handleClick = (govID) => {
    const clickedGov = governorates.find((gov) => gov.id === govID);
    console.log(clickedGov);
    setInfo(clickedGov);
  };

  return (
    <div className="App">
      <Nav />
      <div className="hero-section">
        <Map onClicker={handleClick} />
        <Info data={info} />
      </div>
      <div className="timeline-section">
      <Timeline />
      </div>
      
    </div>
  );
}

export default App;
