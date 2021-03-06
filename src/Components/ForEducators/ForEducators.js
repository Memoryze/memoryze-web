import React, { useState } from 'react';
import Rectangle from '../../assets/forEducators/Rectangle.png';
import Presentation from '../../assets/forEducators/Presentation.png';
import { perksData, processesData } from './data';
import './ForEducators.css';
import Fade from 'react-reveal/Fade';

function ForEducators(props) {
	const [perks] = useState(perksData);
	const [processes] = useState(processesData);
	const mappedPerks = perks.map(({ perk, description, image }, i) => {
		return (
			<div className='perk-contents' key={i + perk}>
				<div className='perk-image'>
					<img src={image} alt={perk + ' icon'} className='perk-image' />
				</div>

				<div className='perk-texts'>
					<h5 className='perk'>
						<br></br>
						{perk}{' '}
						{i === 0 && (
							<p className='beta-icon' title='alpha feature - coming later'>
								αlpha feature
							</p>
						)}
					</h5>
					<p className='perk-description'>{description}</p>
				</div>
			</div>
		);
	});
	const mappedProcesses = processes.map(
		({ process, description, image }, i) => {
			return (
				<div className='process-contents' key={i + process}>
					<div className='process-image-container'>
						<div className='number-count'>{i + 1}</div>
						<img
							src={image}
							alt={process + ' icon'}
							className='process-image'
						/>
					</div>

					<div className='process-texts'>
						<h5 className='process'>{process}</h5>
						<p className='process-description'>{description}</p>
					</div>
				</div>
			);
		}
	);

	return (
		<main className='home-container'>
			<Fade>
				<img
					src={Rectangle}
					alt='semicircle background'
					className='semicircle-background'
				/>
				<section className='section-container landing-section'>
					<div className='pitch'>
						<h3 className='pitch-heading'>Become an Educator</h3>
						<p className='pitch-paragraph'>
							Do you have expert knowledge on a particular topic? If yes,
							Memoryze is for you. Create fantastic audio courses and monetize
							your knowledge. That's right! You are getting paid for being smart
						</p>
						<a href='/educators-get-started' className='get-started-btn'>
							Get started
						</a>
					</div>
					<img
						src={Presentation}
						alt='people making a presentation'
						className='top-image'
					/>
				</section>
			</Fade>

			<div className='sub-container'>
				<Fade>
					<section className='section-container perks'>
						<h5 className='perks-heading'>What's in it for you?</h5>
						<div className='perks-contents-container'>{mappedPerks}</div>
					</section>
				</Fade>
					<section className='section-container create-share-earn'>
						<h5 className='processes-heading'>Create, Share, Earn.</h5>
						<div className='processes-contents-container'>
							{mappedProcesses}
						</div>
					</section>
				
			</div>
		</main>
	);
}

export default ForEducators;
