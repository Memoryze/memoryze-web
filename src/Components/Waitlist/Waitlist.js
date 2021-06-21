import React, { useEffect, useRef } from 'react';
import { run } from 'tripetto-runner-autoscroll';
import Services from 'tripetto-services';
import './Waitlist.css';
function Waitlist(props) {
	const waitlistContainer = useRef(null);
	const {
		definition,
		styles,
		l10n,
		locale,
		translations,
		attachments,
		onSubmit,
	} = Services.init({
		token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidzdTR0VLd1hmTmVIb3ZpTzN3d3dhRG1TZENOSmkvYXBXSkI0dkRVam9QVT0iLCJkZWZpbml0aW9uIjoieXA5MVdKazFXS1A0SlVrOTNmM3JZajg3OTdCdXRnaUVZckJ0MHppWWxJST0iLCJ0eXBlIjoiY29sbGVjdCJ9.ySfSoduzE_lV51dhk7q4rbM7TAfTTK_OGZsaw8ty59o',
	});

	run({
		element: document.querySelector('#waitlist') /* Or supply your own element here */,
		definition,
		styles,
		l10n,
		locale,
		translations,
		attachments,
		onSubmit,
		persistent: true,
	});

	useEffect(() => {
		run({
			element: waitlistContainer /* Or supply your own element here */,
			definition,
			styles,
			l10n,
			locale,
			translations,
			attachments,
			onSubmit,
			persistent: true,
		});
	});
	return <main ref={waitlistContainer} className='main' id='waitlist'></main>;
}

export default Waitlist;