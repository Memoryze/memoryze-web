import React, { useState } from 'react';
import { educators, learners } from './data';
import FAQ from './FAQ';
import './FAQsPage.css';
import semicircleBackground from '../../assets/landingPage/semicircleBackground.png';
import FAQs from '../../assets/FAQs.png';
function FAQsPage(props) {
	const [faqs] = useState({ educators: educators, learners: learners });
	const [forEducators, setForEducators] = useState(true);
	const educatorsFAQs = faqs.educators.map(({ question, answer }, i) => {
		return <FAQ question={question} answer={answer} id={i + 'educators'} />;
	});
	const learnersFAQs = faqs.learners.map(({ question, answer }, i) => {
		return <FAQ question={question} answer={answer} id={i + 'educators'} />;
	});
	return (
		<main className='home-container'>
			<img
				src={semicircleBackground}
				alt='semi circle background'
				className='semicircle-background'
			/>
			<h1 className='faqs-heading'>Questions We Get Asked...A Lot</h1>
			<img src={FAQs} alt='people chatting' className='faqs-image' />
			<div className='btn-container'>
				<button
					className={
						forEducators ? 'active-btn faq-btn' : 'inactive-btn faq-btn'
					}
					onClick={() => {
						setForEducators(true);
					}}>
					By Educators
				</button>
				<button
					className={
						!forEducators ? 'active-btn faq-btn' : 'inactive-btn faq-btn'
					}
					onClick={() => {
						setForEducators(false);
					}}>
					By Learners
				</button>
			</div>
			<div className='faqs-container'>
				{forEducators ? educatorsFAQs : learnersFAQs}
			</div>
		</main>
	);
}

export default FAQsPage;
