import React, { useState } from 'react';
import semicircleBackground from '../../assets/semicircleBackground.png';
import manStudying from '../../assets/manStudying.png';
import PhoneMockup from '../../assets/PhoneMockup.png';
import Rockstar from '../../assets/Rockstar.png';
import dreadedGuy from '../../assets/dreadedGuy.png';
import groupcard1 from '../../assets/groupcard1.png';
import groupcard2 from '../../assets/groupcard2.png';
import groupcard3 from '../../assets/groupcard3.png';
import groupcard4 from '../../assets/groupcard4.png';
import groupcard5 from '../../assets/groupcard5.png';
import groupcard6 from '../../assets/groupcard6.png';
import standaloneLogo from '../../assets/standaloneLogo.png';
import instagramIcon from '../../assets/instagramIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import twitterIcon from '../../assets/twitterIcon.png';
import linkedInIcon from '../../assets/linkedInIcon.png';
import { featuresData } from './data';
import './LandingView.css';

function LandingView(props) {
	const [features, setFeatures] = useState(featuresData);
	const mappedFeatures = features.map(({ name, description, image }) => {
		return (
			<div className='feature-contents'>
				<img src={image} alt={name + ' icon'} className='feature-image' />
				<div className='feature-texts'>
					<h5 className='feature-name'>{name}</h5>
					<p className='feature-description'>{description}</p>
				</div>
			</div>
		);
	});
	return (
		<main className='home-container'>
			<img
				src={semicircleBackground}
				alt='semicircle background'
				className='semicircle-background'
			/>
			<section className='section-container landing-section'>
				<div className='pitch'>
					<h3 className='pitch-heading'>
						Audio learning for wherever, whenever
					</h3>
					<p className='pitch-paragraph'>
						"The other side of the coin is, however, that there is a direct
						relation between the system concepts and the progress of the
						operations research
					</p>
					<a href='/app-link' className='get-the-app-btn'>
						Get the app!
					</a>
				</div>
				<img src={manStudying} alt='man-studying' className='man-studying' />
			</section>
			<section className='section-container'>
				<div className='features'>
					<h4 className='features-heading'>Features</h4>
					<div className='feature-contents-container'>{mappedFeatures}</div>
				</div>
				<img src={PhoneMockup} alt='phone mockup' className='phone-mockup' />
			</section>
			<h4 className='section-heading'>Learn for the sake of learning</h4>
			<section className='section-container rock-star-section'>
				<img src={Rockstar} alt='rock star' className='rock-star' />
				<div className='rock-star-text'>
					<h5 className='rock-star-heading'>Learn like a Rockstar</h5>
					<p className='rock-star-description'>{`"That is to say the lack of knowledge of impact of the application interface has common features with The Availability of Professional Evaluation" (Millard Hewitt in The Book of the Well-Known Practice) On the other hand, elements of the essence directly changes the principles of the first-class package.`}</p>
				</div>
			</section>
			<h4 className='section-heading'>
				Hundreds of people have signup up for early access
			</h4>
			<p className='section-subheading'>Here's what some of them had to say</p>
			<section className='section-container memoji-section'>
				<img
					src={groupcard1}
					alt='memoji and comment'
					className='memoji-person'
				/>
				<img
					src={groupcard2}
					alt='memoji and comment'
					className='memoji-person'
				/>
				<img
					src={groupcard3}
					alt='memoji and comment'
					className='memoji-person'
				/>
				<img
					src={groupcard4}
					alt='memoji and comment'
					className='memoji-person'
				/>
				<img
					src={groupcard5}
					alt='memoji and comment'
					className='memoji-person'
				/>
				<img
					src={groupcard6}
					alt='memoji and comment'
					className='memoji-person'
				/>
			</section>
			<footer className='footer'>
				<img src={standaloneLogo} alt='logo' className='logo-icon' />
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
						fontSize: 1 + 'rem',
						marginTop: 30 + 'px',
					}}>
					<span style={{ fontSize: 1.5 + 'rem', paddingTop: 75 + 'px' }}>
						&copy;
					</span>{' '}
					Memoryze, 2021. All rights reserved
				</p>
				<p>
					<a href='/terms' className='footer-link'>
						Terms of service{' '}
					</a>
					|{' '}
					<a href='/privacy-policy' className='footer-link'>
						Privacy Policy
					</a>
				</p>
			</footer>
		</main>
	);
}

export default LandingView;
