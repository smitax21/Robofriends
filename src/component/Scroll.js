import React from 'react';


const Scroll = (props) => {
	return (
		<div style={{ overflow: 'Scroll', border: '5px solid #24866E', height: '450px', padding: '2px' }} >
		{props.children}
		</div>
		)
};

export default Scroll;