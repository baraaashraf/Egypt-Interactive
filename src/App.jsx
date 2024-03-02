import Map from "./components/Map";
import Info from "./components/Info";
import Nav from "./components/Nav";
import { useState } from "react";
import { governorates } from "./areas";
import EgyFlag from "./assets/Egypt.png";

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
      <div className="hero">
        <Map onClicker={handleClick} />
        <Info data={info} />
      </div>
    </div>
  );
}

export default App;
