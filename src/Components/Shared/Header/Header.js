import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import IconWithText from '../../../assets/LogoWithText.png';
import './Header.css';

function Header() {
	const [enableSidebar, setEnableSidebar] = useState(true);
	const [scrolling, setScrolling] = useState(false);
	const [links] = useState([
		{ url: '/', text: 'Home' },
		{ url: '/for-educators', text: 'For Educators' },
		{ url: '/faqs', text: 'FAQs' },
	]);
	const listenToScrollEvent = (e) => {
		if (window.scrollY > 5) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', listenToScrollEvent);
	}, []);

	return (
		<nav className={scrolling ? 'navigation navigation-with-background' : 'navigation'}>
			<Navbar.Brand href='/' className='logo'>
				<img src={IconWithText} alt='logo' className="logo-text-image"/>
			</Navbar.Brand>
			<Nav className='mr-auto header-links'>
				{links.map(({ url, text }, i) => {
					return <a href={url} key={i+'link'}>{text}</a>;
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
