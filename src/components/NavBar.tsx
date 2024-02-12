import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

    const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
        if (navRef.current) { // Check if navRef.current exists
            navRef.current.classList.toggle("responsive_nav");
        }
    };

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Sign Up!</a>
				<Link to="/login">Login</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}


export default NavBar;
