import { Link } from "react-router-dom";
import "../Css/Navbar.css"
function NavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-brand">
                <li><Link to="/">Movie App</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>

            </div>
        </nav>
    );
}

export default NavBar;