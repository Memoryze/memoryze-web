import React, { useState } from 'react';
import Header from '../Header/Header';
import semicircleBackground from './assets/semicircleBackground.png';
import manStudying from './assets/manStudying.png';
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
					<h3 className="pitch-heading">Audio learning for wherever, whenever</h3>
					<p className="pitch-paragraph">
						"The other side of the coin is, however, that there is a direct
						relation between the system concepts and the progress of the
						operations research"
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
			</section>
		</main>
	);
}

export default LandingView;
