import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../firebase/firebase";



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
					<h3>LOGO</h3>
				</Link>

				<nav ref={navRef}>

					{/*if user is logged in, remove signup/log in*/}
					{currentUser ? (
						<>
							
							<Link to="/">home</Link>
							<Link to="/search">search</Link>
							<Link to="/view">Restaurant View</Link>
							<Link to="/profile">
								<img src={currentUser.photoURL ?? 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2c%2FDefault_pfp.svg%2F1200px-Default_pfp.svg.png&tbnid=t5PQpQ66IW5J4M&vet=12ahUKEwjApLK059GEAxWiJEQIHXLqB84QMygAegQIARBy..i&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ADefault_pfp.svg&docid=o_Ii_cyIO_p3fM&w=1200&h=1200&q=default%20profile%20picture%20&ved=2ahUKEwjApLK059GEAxWiJEQIHXLqB84QMygAegQIARBy'} 
									alt="Profile" 
									className="navBar-avatar" 
									title="Profile" //tooltip
								/>
							</Link>
							
							
						</>
					) : (
						<>
							<Link to="/">home</Link>
							<Link to="/search">search</Link>
							<Link to="about">about</Link>
							<div className="bg-yellow-50 border border-orange-300 border-2 text-orange font-semibold py-2 px-1 ml-2 mr-4 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-600 transition-colors duration-300">
								<Link to="/signup">sign up</Link>
							</div>
							<div className="bg-yellow-50 border border-orange-300 border-2 text-orange font-semibold py-2 px-3 rounded-md hover:bg-blue-400 hover:text-white hover:border-blue-600 transition-colors duration-300">
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
