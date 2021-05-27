import React, { useState } from 'react';
import semicircleBackground from '../../assets/landingPage/semicircleBackground.png';
import manStudying from '../../assets/landingPage/manStudying.png';
import PhoneMockup from '../../assets/landingPage/PhoneMockup.png';
import Rockstar from '../../assets/landingPage/Rockstar.png';

import { featuresData, memojies } from './data';
import './LandingView.css';

function LandingView(props) {
	const [features] = useState(featuresData);
	const mappedFeatures = features.map(({ name, description, image }, i) => {
		return (
			<div className='feature-contents' key={i + name}>
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
						Learn something new everyday. The best part is you don't have to put
						a pause on whatever you're doing to learn. Just select what you want
						to learn, connect your headphones and press play!
					</p>
					<a href='/app-link' className='get-the-app-btn'>
						Get early access!
					</a>
				</div>
				<img src={manStudying} alt='man-studying' className='top-image' />
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
					<h5 className='rock-star-heading'>Live and learn</h5>
					<p className='rock-star-description'>{`"That is to say the lack of knowledge of impact of the application interface has common features with The Availability of Professional Evaluation" (Millard Hewitt in The Book of the Well-Known Practice) On the other hand, elements of the essence directly changes the principles of the first-class package.`}</p>
				</div>
			</section>
			<h4 className='section-heading'>
				Hundreds of people have signup up for early access
			</h4>
			<p className='section-subheading'>Here's what some of them had to say</p>
			<section className='section-container memoji-section'>
				{memojies.map(({ name, image, comment }, i) => {
					return (
						<div className='memoji-card' key={i + name}>
							<img src={image} alt='a memoji' className='memoji' />
							<div className='memoji-texts-container'>
								<p className='memoji-name'>{name}</p>
								<p className='memoji-comment'>{comment}</p>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default LandingView;
