import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

function FAQ({ question, answer, id }) {
	const [open, setOpen] = useState(false);
	return (
		<div className='faq-panel'>
			<div className='question-container'>
				<h5 className='question'>{question}</h5>
				{open ? (
					<RiArrowUpSLine
						onClick={() => setOpen(false)}
						className='arrow'
						size={20}
					/>
				) : (
					<RiArrowDownSLine
						onClick={() => setOpen(true)}
						className='arrow'
						size={20}
					/>
				)}
			</div>
			<Collapse in={open}>
				<div id={id} className='answer'>
					{answer}
				</div>
			</Collapse>
		</div>
	);
}

export default FAQ;
