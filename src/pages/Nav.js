import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Log in</Link>
				</li>
			</ul>
			<hr />
		</div>
	);
};

export default Nav;
