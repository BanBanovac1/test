var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/header.scss');
require('../styles/booking.scss');
require('../styles/footer.scss');

import HeaderComponent from './header.js';
import FooterComponent from './footer.js';
import BoatCardComponent from './boatCard.js';
import BookTourCardComponent from './bookTourCard.js';
import BookBoatCardComponent from './bookBoatCard.js';

//Create component
class AppComponent extends React.Component {
	render() {
		return (
			<div className="app">
				<HeaderComponent />
				<div className="boatCardAlign">
					<BoatCardComponent />
				</div>
				<div className="bookTourAlign">
					<BookTourCardComponent />
					<BookBoatCardComponent />
					<div className="dealsElement">
						<a href="#">
							<div className="dealsElementText">HOTEL DEALS</div>
							<img className="dealsElementIcon" src="../images/forwardIcon.png" alt="forward" />
						</a>
					</div>
				</div>
				<FooterComponent />
			</div>
		);
	}
}



//put component into html page
ReactDOM.render(<AppComponent />, document.getElementById('app-wrapper'));