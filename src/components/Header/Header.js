import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <nav className="nav-bar">
            <Link to='/'><img src={logo}/></Link>
            <div class="menu">
                <Link to="/Services">Services</Link>
                <Link to='/Industries'>Industries</Link>
                <Link to='/About'>About Us</Link>
                <Link to='/TeamDaPixel'>Team DaPixel</Link>
                <Link to='/Blog'>Blog</Link>
                <button className="btn">Contact Us</button>
            </div>
        </nav>
    )
};





