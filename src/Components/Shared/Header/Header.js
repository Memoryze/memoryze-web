import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
	const [enableSidebar, setEnableSidebar] = useState(true);
	const [links] = useState([
		{ url: '/', text: 'Home' },
		{ url: '/for-educators', text: 'For Educators' },
		{ url: '/faqs', text: 'FAQs' },
	]);

	return (
		<nav className='navigation'>
			<Navbar.Brand href='/' className='logo'>
				Memoryze
			</Navbar.Brand>
			<Nav className='mr-auto header-links'>
				{links.map(({ url, text }) => {
					return <a href={url}>{text}</a>;
				})}
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
					{links.map(({ url, text }, i) => {
						return (
							<a
								href={url}
								className='side-link'
								onClick={() => {
									setEnableSidebar(true);
								}}
								key={i}>
								{text}
							</a>
						);
					})}
				</div>
			)}
		</nav>
	);
}

export default Header;
