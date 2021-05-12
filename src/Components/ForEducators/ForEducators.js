import React from 'react';
import Rectangle from '../../assets/Rectangle.png';
import Presentation from '../../assets/Presentation.png';
import './ForEducators.css'

function ForEducators(props) {
    return (
			<main>
				<img
					src={Rectangle}
					alt='semicircle background'
					className='semicircle-background'
				/>
				<section className='section-container landing-section'>
					<div className='pitch'>
						<h3 className='pitch-heading'>Become an Educator</h3>
						<p className='pitch-paragraph'>
							"First and foremost, a lot of effort has been invested into the
							increasing growth of technology and productivity. However, we can
							also agree that the crucial development skills underlines the
							limitation of the effective mechanism on a modern economy.
						</p>
						<a href='/app-link' className='get-started-btn'>
							Get started
						</a>
					</div>
					<img
						src={Presentation}
						alt='people making a presentation'
						className='people-presentation'
					/>
				</section>
			</main>
		);
}

export default ForEducators;