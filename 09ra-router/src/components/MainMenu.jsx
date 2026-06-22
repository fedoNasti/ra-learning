import { Link } from "react-router";
import { NavLink } from "react-router";

export function MainMenu() {
  return (
    <Nav style={{ display: "flex", gap: "20px" }}>
      <NavLink 
      to="/"
      className={({ isActive }) => (isActive ? "active-link" : "")}>
      MAIN
      </NavLink>

      <NavLink 
      to="/contacts"
      className={({ isActive }) => (isActive ? "active-link" : "")}>
      Contacts
      </NavLink>
    </Nav>
  );
}