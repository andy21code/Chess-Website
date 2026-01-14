import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./pages/Home";
import Tactic from "./pages/Tactic";
import Player from "./pages/Player";
import Chess_Card from "./pages/Chess_Cards";

function App() {
  return (
    <>
      <Navbar className='topnav'/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tactic" element={<Tactic />} />
        <Route path="/player" element={<Player />} />
        <Route path="/opening" element={<Chess_Card />} />
      </Routes>
    </>
  );
}

export default App;