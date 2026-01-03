import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/NavBar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <img src="/strangerthings.svg" alt="Stranger Things Logo" />
      </Link>

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/heroes" onClick={() => setOpen(false)}>Heroes</Link>
        </li>
        <li>
          <Link to="/creatures" onClick={() => setOpen(false)}>Creatures</Link>
        </li>
        <li>
          <Link to="/episodes" onClick={() => setOpen(false)}>Episodes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
