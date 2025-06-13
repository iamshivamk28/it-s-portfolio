
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Shivam Khandare</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/frontend">Frontend</Link>
        </li>
        <li>
          <Link to="/videoeditor">Video Editor</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-contact-btn">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
