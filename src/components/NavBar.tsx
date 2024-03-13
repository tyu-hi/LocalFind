import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../firebase/firebase";
import logo from "./localfind.png"



const NavBar = () => {

	//get user from firebase
	const currentUser = useAuth();

    const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
        if (navRef.current) { // Check if navRef.current exists
            navRef.current.classList.toggle("responsive_nav");
        }
    };

	return (
		<div className='bg-lightgray text-navyblue font-alata font-semibold'>
			<header >
				<Link to="/">
				<img src={logo} alt="Brand Logo" className="h-11 mr-3 scale-150" /> {/* Adjust the h-10 class to fit the image size to your navbar */}
				</Link>

				<nav ref={navRef}>

					{/*if user is logged in, remove signup/log in*/}
					{currentUser ? (
						<>
							
							<Link to="/" className='hover:text-blue-800'>home</Link>
							<Link to="/search" className='hover:text-blue-800'>search</Link>
							<Link to="/about" className='hover:text-blue-800'>about</Link>
							<Link to="/addrestraunt" className='hover:text-blue-800'>add business</Link>
							<Link to="/profile">
								<img src={currentUser.photoURL ?? 'public/Default_pfp.svg.png'} 
									alt="Profile" 
									className="navBar-avatar" 
									title="Profile" //tooltip
								/>
							</Link>
							
							
						</>
					) : (
						<>
							<Link to="/" className='hover:text-blue-800'>home</Link>
							<Link to="/search" className='hover:text-blue-800'>search</Link>
							<Link to="/about" className='hover:text-blue-800'>about</Link>
							<div className="bg-yellow-50 border border-orange border-2 text-orange font-semibold py-2 px-1 ml-2 mr-4 rounded-md hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-colors duration-300">
								<Link to="/signup">sign up</Link>
							</div>
							<div className="bg-yellow-50 border border-orange border-2 text-orange font-semibold py-2 px-3 rounded-md hover:bg-blue-400 hover:text-white hover:bg-yellow-400 hover:border-yellow-400 transition-colors duration-300">
								<Link to="/login">log in</Link>
							</div>
						</>
					)}
					
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
		</div>
	);
}


export default NavBar;
