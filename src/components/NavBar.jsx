import { Link } from "react-router-dom"
import "../styles/NavBar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
            <Link to="/" className="nav-logo">
        <img
          src="/strangerthings.svg"
          alt="Stranger Things Logo"
        />
      </Link>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/heroes">Heroes</Link></li>
        <li><Link to="/">Episodes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
