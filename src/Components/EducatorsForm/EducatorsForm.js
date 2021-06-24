import React, { useEffect } from 'react';
import { run } from 'tripetto-runner-autoscroll';
import Services from 'tripetto-services';
import './EducatorsForm.css';
const key = process.env.REACT_APP_TRIPETTO_TOKEN;
function EducatorsForm(props) {
	//Nothing here is conventional
	var tripetto = Services.init({
		token: key,
	});

	useEffect(() => {
		document
			.querySelector('.navigation')
			.classList.add('navigation-with-background');
		const tripElement = document.getElementById('tripetto');
		tripElement.addEventListener('scroll', () => {
			document
				.querySelector('.navigation')
				.classList.add('navigation-with-background');
		});

		run({
			element: document.getElementById('tripetto'),
			definition: tripetto.definition,
			styles: tripetto.styles,
			l10n: tripetto.l10n,
			locale: tripetto.locale,
			translations: tripetto.translations,
			attachments: tripetto.attachments,
			onSubmit: tripetto.onSubmit,
			persistent: true,
		});
	});
	return (
		<main className='main container'>
			<div id='tripetto'></div>
		</main>
	);
}

export default EducatorsForm;
