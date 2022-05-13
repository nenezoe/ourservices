import React, { useState } from "react";
import {FaTimes} from 'react-icons/fa';
import { IconContext } from "react-icons";
import {CgMenuRight} from 'react-icons/cg';
import { useLocation, useNavigate } from "react-router-dom";
// import {useLocation, useHistory} from 'react-router-dom';
import { Data } from "../../data/NavbarData";
import { Nav, NavbarContainer, NavLogo, NavIcon,MobileIcon, NavMenu, NavLinks, NavItem } from "./NavbarStyles";

const Navbar = () => {

    const [show, setShow] = useState(false);

	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};

    return (
    <IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./assets/logo.png" alt="logo" />
						Delta
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{Data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
    )
}

export default Navbar;