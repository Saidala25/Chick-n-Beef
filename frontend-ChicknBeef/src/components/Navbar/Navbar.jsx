import "./Navbar.css"
import logo from "../../assets/logo.png";
import { Home, UtensilsCrossed, ShoppingBag, PhoneCall, User, Search } from 'lucide-react';


function Navbar(){
    return(
        <nav className="navbar">
            <a> 
                <img src={logo} alt="CHICK'N BEEF" className="logo"/>
            </a>

            <button className="menu-btn">☰</button>

            <ul className="nav-links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Home">Contact</a></li>
            </ul>

            <div className="Icons">
                <a href="#Home">
                <ShoppingBag size={18} color="white" />
                </a>
                <a href="#Home">
                <UtensilsCrossed size={18} color="white" />
                </a>
                <a href="#Home">
                <Search size={18} color="white" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar