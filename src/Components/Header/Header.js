import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
	const [enableSidebar, setEnableSidebar] = useState(true);

	return (
		<nav className='navigation'>
			<Navbar.Brand href='/home' className='logo'>
				Memoryze
			</Navbar.Brand>
			<Nav className='mr-auto header-links'>
				<a href='#home'>Home</a>
				<a href='#link'>Link</a>
			</Nav>

			<div
				className={!enableSidebar ? 'closeBtn' : 'bars'}
				onClick={() => {
					setEnableSidebar(!enableSidebar);
				}}>
				{!enableSidebar ? <>&times;</> : <>&#9776;</>}
			</div>
			{!enableSidebar && (
				<div id='mySidenav' className='sidenav'>
					<a
						href='/'
						className='side-link'
						onClick={() => {
							setEnableSidebar(true);
						}}>
						About
					</a>
					<a
						href='/'
						className='side-link'
						onClick={() => {
							setEnableSidebar(true);
						}}>
						FAQ
					</a>
				</div>
			)}
		</nav>
	);
}

export default Header;
