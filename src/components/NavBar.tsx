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
				<Link to="/profile">Temp Profile</Link>
				<Link to="/addrestraunt">Temp Add Restraunt</Link>
				<Link to="/signup">Sign up</Link>
				<Link to="/login">Login</Link>
				<Link to="/view">Temp RestrauntView </Link>
				
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
