import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tactic">Tactic</NavLink>
      <NavLink to="/player">Player</NavLink>
      <NavLink to="/opening">Opening</NavLink>
    </div>
  );
}

export default Navbar;
