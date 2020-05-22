import React, { Fragment } from 'react';

const Card = ({name, email, id}) => {
	return(
		<Fragment>
		 <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
			<img alt='robofriends' src={`https://robohash.org/${id}? size=200x200`} />
			<h2>{name}</h2>
			<p>{email}</p>
		 </div>
		</Fragment>
		);
	}

export default Card;
