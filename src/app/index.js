import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import HeaderComponent from './header.js';
import FooterComponent from './footer.js';
import BoatCardComponent from './boatCard.js';
import BookTourCardComponent from './bookTourCard.js';
import BookBoatCardComponent from './bookBoatCard.js';
import ContactComponent from './contact.js';

require('../styles/main.scss');

//Create component
class AppComponent extends React.Component {
	render() {
		return (
			<div className="app">
				<ContactComponent />
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
ReactDOM.render(<LocaleProvider locale={enUS}><AppComponent /></LocaleProvider>, document.getElementById('app-wrapper'));