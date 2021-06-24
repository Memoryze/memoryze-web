import React from 'react';
import { Waitlist } from 'waitlistapi';
import './WaitList.css';

const key = process.env.REACT_APP_GET_WAIT_LIST_API_KEY;
function WaitList(props) {
    console.log(key)
	
	return (
		<main className='main container'>
			<Waitlist api_key={`${key}`} />
		</main>
	);
}

export default WaitList;
