import React from 'react';
import Logo from '../../../assets/Logo.png';
import instagramIcon from '../../../assets/landingPage/instagramIcon.png';
import facebookIcon from '../../../assets/landingPage/facebookIcon.png';
import twitterIcon from '../../../assets/landingPage/twitterIcon.png';
import linkedInIcon from '../../../assets/landingPage/linkedInIcon.png';

import './Footer.css';
function Footer(props) {
	return (
		<footer className='footer'>
			<img src={Logo} alt='logo' className='logo-icon' />
			<div className='social-links'>
				<a href='/facebook' target='_blank' rel='noopener noreferrer'>
					<img src={facebookIcon} alt='logo' className='social-icon' />
				</a>
				<a
					href='https://www.instagram.com/memoryzehq/'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={instagramIcon} alt='logo' className='social-icon' />
				</a>
				<a href='/linkedIn' target='_blank' rel='noopener noreferrer'>
					<img src={linkedInIcon} alt='logo' className='social-icon' />
				</a>
				<a
					href='https://twitter.com/MemoryzeHQ'
					target='_blank'
					rel='noopener noreferrer'>
					<img src={twitterIcon} alt='logo' className='social-icon' />
				</a>
			</div>
			<p
				style={{
					fontWeight: 'bold',
					fontSize: 0.75 + 'rem',
					marginTop: 30 + 'px',
				}}>
				<span style={{ fontSize: 1 + 'rem', paddingTop: 75 + 'px' }}>
					&copy;
				</span>{' '}
				Memoryze, 2021. All rights reserved
			</p>
			<p>
				<a href='/terms' className='footer-link'>
					Terms of services{' '}
				</a>
				|{' '}
				<a href='/privacy-policy' className='footer-link'>
					Privacy Policy
				</a>
			</p>
		</footer>
	);
}

export default Footer;
