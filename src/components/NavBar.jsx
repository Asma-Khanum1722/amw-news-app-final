import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/file.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav>
      <div>
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-element" : "")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "active-element" : "")}
            onClick={() => setIsOpen(false)}
          >
            News
          </NavLink>
        </li>
        <li>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
            className="nav-scroll-link"
          >
            About Us
          </a>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active-element" : "")}
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            className="nav-scroll-link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
