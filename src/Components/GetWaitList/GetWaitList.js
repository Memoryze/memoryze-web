import React from 'react';
import { Waitlist } from 'waitlistapi';
const key = process.env.REACT_APP_GET_WAIT_LIST_API_KEY;
function GetWaitList(props) {
	return (
		<main className='main container'>
			<Waitlist
				api_key={`${key}`}
				waitlist_link='http://localhost:3000/wait-list'
			/>
		</main>
	);
}

export default GetWaitList;
