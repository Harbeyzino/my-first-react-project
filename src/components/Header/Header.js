import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav-bar">
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
      <div className="menu">
        <Link className="nav-link" to="/Services">Services</Link>
        <Link className="nav-link" to='/Industries'>Industries</Link>
        <Link className="nav-link" to='/About'>About Us</Link>
        <Link className="nav-link" to='/TeamDaPixel'>Team DaPixel</Link>
        <Link className="nav-link" to='/Blog'>Blog</Link>
        <button className="btn">Contact Us</button>
      </div>
    </nav>
  );
}
