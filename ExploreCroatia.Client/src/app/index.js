import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import BoatSelected from './pages/boatSelected.js';
import ContactComponent from './pages/contact.js';
import HomeComponent from './pages/home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

require('../styles/main.scss');

//Create component
class AppComponent extends React.Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path='/' component={HomeComponent} />
					<Route path='/Boats' component={BoatSelected} />
					<Route path='/Apartments' component={BoatSelected} />
					<Route path='/Explore' component={BoatSelected} />
					<Route path='/Contact' component={ContactComponent} />
				</Switch >
					{/*<div className="boatCardAlign">
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
				<FooterComponent />*/}
				
			</div>
				);
	}
}



//put component into html page
ReactDOM.render(<BrowserRouter><LocaleProvider locale={enUS}><AppComponent /></LocaleProvider></BrowserRouter>, document.getElementById('app-wrapper'));