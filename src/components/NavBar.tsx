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
		<header>
			<Link to="/">
				<h3>LOGO</h3>
			</Link>

			<nav ref={navRef}>

				{/*if user is logged in, remove signup/log in*/}
				{currentUser ? (
                    <>
						TempReviews?
						About?
                        <Link to="/search">Search</Link>
                        <Link to="/addrestraunt">Add Restaurant</Link>
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
                        <Link to="/signup">Sign up</Link>
                        <Link to="/login">Login</Link>
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
	);
}


export default NavBar;
