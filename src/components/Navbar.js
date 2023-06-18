import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src="./logo.png" className="logo" alt="" />
			<nav ref={navRef}>
				<a href="/#">PARTNERS</a>
				<a href="/#">COLLECTION</a>
				<a href="/#">ABOUT US</a>
				<a href="/#">DOWNLOAD</a>
				<a href="/#">CONTACT US</a>
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

export default Navbar;