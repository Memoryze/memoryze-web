import React from 'react';
import Header from '../Header/Header';
import semicircleBackground from './assets/semicircleBackground.png';
import manStudying from './assets/manStudying.png';
import './LandingView.css';

function LandingView(props) {
    return (
			<div className='home-container'>
				<img
					src={semicircleBackground}
					alt='semicircle background'
					className='semicircle-background'
				/>
				<Header/>
				<div className='pitch-container'>
					<div className='pitch'>
						<h3>Audio learning for wherever, whenever</h3>
						<p>
							"The other side of the coin is, however, that there is a direct
							relation between the system concepts and the progress of the
							operations research"
						</p>
						<a href='/app-link' className="get-the-app-btn" >Get the app!</a>
					</div>
					<img src={manStudying} alt='man-studying' className='man-studying' />
				</div>
			</div>
		);
}

export default LandingView;