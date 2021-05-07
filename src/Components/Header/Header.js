import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';
import { FaQuestionCircle } from 'react-icons';
import './Header.css';

function Header(props) {
	const [enableSidebar, setEnableSidebar] = useState(true);

	return (
		<Navbar className='nav'>
			<Navbar.Brand href='/home'>Memoryze</Navbar.Brand>
			<Nav className='mr-auto header-links'>
				<Nav.Link href='#home'>Home</Nav.Link>
				<Nav.Link href='#link'>Link</Nav.Link>
			</Nav>
			<Nav>
				<div
					className='bars'
					onClick={() => {
						setEnableSidebar(false);
					}}>
					&#9776;
				</div>
				{!enableSidebar && (
					<div id='mySidenav' className='sidenav'>
						<span
							className='closeBtn'
							onClick={() => {
								setEnableSidebar(true);
							}}>
							&times;
						</span>
						<a href='/' className='side-link'>
							About
						</a>
						<a href='/' className='side-link'>
							FAQ
						</a>
					</div>
				)}
			</Nav>
		</Navbar>
	);
}

export default Header;
