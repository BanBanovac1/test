import React from 'react';
import HeaderTop from './headerTop.js';



export default class HeaderContactComponent extends React.Component {
	render() {
		return (
			<div className="headerContact">
				<HeaderTop />
				<div className="headerMain">
					<div className="headerMainTitle"><h2><span>EXPLORE</span>croatia</h2></div>
					<div className="headerMainText">You are lost or just need help? We are here to help you.</div>
					<div className="headerMainPhone">+385 91 5386 369</div>
				</div>
			</div>
		);
	}
}