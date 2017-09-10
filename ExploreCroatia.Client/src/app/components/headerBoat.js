import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import HeaderTop from './headerTop.js';
import BookBoatCardComponent from './bookBoatCard.js';
import ImageGallery from './lightbox.js';

const boatName = "C-Renity Sailboat, BavAdria";
const boatAddress = "Priova 4, Kaštel Gomilica, 21213";

export default class HeaderBoatComponent extends React.Component {
	 constructor(props) {
        super(props);
	 }
	render() {
		return (
			<div className="headerBoat">
				<HeaderTop />
				<div className="headerMain">
					<div className="headerMainLeft">
						<hr />
						<div className="headerMainLeftBoatName">
							<h2>{boatName}</h2>
						</div>
						<div className="headerMainLeftBoatAddress">{boatAddress}</div>
						<ImageGallery />
					</div>
					<BookBoatCardComponent openPay={this.props.triggerUpdatePaymentState}/>
				</div>
			</div>
		);
	}
}