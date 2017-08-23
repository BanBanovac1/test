var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/header.scss');
require('../styles/booking.scss');
require('../styles/footer.scss');

import HeaderComponent from './header.js';
import FooterComponent from './footer.js';

//Create component
class AppComponent extends React.Component{
	render() {
		return (
			<div className="app">
				<HeaderComponent />
				<div className="boatCardAlign">
					<div className="boatCard">
						<div className="boatCardImg">
							<img src="../images/boat.png" alt="boat" />	
						</div>
						<div className="boatName">Jeanneau Merry Fisher 456</div>
						<div className="boatAddress">Kaštel Gomilica, Marka Marulića...</div>
						<div className="boatCardRowOne">
							<img className ="boatCardPeopleIcon" src="../images/peopleIcon.png" alt="boatIcon" />
							<div className="boatCardRowText">8 people</div>
							<img className ="boatCardSpeedIcon" src="../images/speedIcon.png" alt="boatIcon" />
							<div className="boatCardRowText">70 knots</div>
						</div>
						<div className="boatCardRowTwo">
							<img className ="boatCardBedIcon" src="../images/bedIcon.png" alt="boatIcon" />
							<div className="boatCardRowText">4 beds</div>
							<img className ="boatCardWrenchIcon" src="../images/wrenchIcon.png" alt="boatIcon" />
							<div className="boatCardRowText">Built in 2017</div>
						</div>
						<div className="boatCardPriceButtonAlign">
							<div className="boatCardPriceBox">
								<div className="boatCardPrice">320<span>€</span></div>
								<div className="boatCardPriceText">per day</div>
							</div>
							<a href="#" className="boatCardButton">Book Now</a>
						</div>
					</div>
				</div>
				<div className="bookTourAlign">
					{/*BOOK TOUR*/}
					<div className="bookTourCard">
						<div className="bookTourCardTop">
							<div className="bookTourCardTopTitle">TOTAL PRICE:</div>
							<div className="bookTourCardTopPriceBox">
								<div className="bookTourPrice">360<span>€</span></div>
								<div className="bookTourPriceText">120€ per person</div>
							</div>
						</div>
						<div className="bookTourPeopleSelect">
							<img className="bookTourPeopleIcon" src="../images/peopleIcon.png" alt="people" />
							<div className="bookTourPeopleSelectText">Number of people: </div>
							<div className="bookTourPeopleSelectNumberBox">
								<img className="bookTourMinus" src="../images/minusIcon.png" alt="minus" />
								<div className="bookTourPeopleNumber">3</div>
								<img className="bookTourPlus" src="../images/plusIcon.png" alt="plus" />
							</div>
						</div>
						<div className="bookTourDateSelect">
							<img className="bookTourDateIcon" src="../images/dateIcon.png" alt="date" />
							<div className="bookTourDateSelectText">Select date: </div>
							<div className="bookTourDateSelectDatePicker">
								<div className="bookTourDateSelectDate">21st of July, <span>Sunday</span></div>
								<img className="bookTourBackIcon" src="../images/backIcon.png" alt="back" />
							</div>
						</div>
						<a href="#" className="bookTourButton">Book now</a>
						<div className="bookTourHelp">Have a question? Call <span>+(0) 385 91 5386 369</span></div>
					</div>
					{/*BOAT BOOKING*/}
					<div className="bookBoatCard">
						<div className="bookBoatCardTop">
							<div className="bookBoatCardTopTitle">TOTAL PRICE:</div>
							<div className="bookBoatCardTopPriceBox">
								<div className="bookBoatPrice">360<span>€</span></div>
								<div className="bookBoatPriceText">Insurance included</div>
							</div>
						</div>
						<div className="bookBoatCardCheckDate">
							<div className="checkDateBox">
								<img className="dateIcon" src="../images/dateIcon.png" alt="date" />
								<div className="checkDateText">Check in date</div>
								<img className="backIcon" src="../images/backIcon.png" alt="back" />
							</div>
							<div className="checkDateBox right">
								<img className="dateIcon" src="../images/dateIcon.png" alt="date" />
								<div className="checkDateText">Check out date</div>
								<img className="backIcon" src="../images/backIcon.png" alt="back" />
							</div>
						</div>
						<div className="bookBoatPeopleSelect">
							<img className="bookBoatPeopleIcon" src="../images/peopleIcon.png" alt="people" />
							<div className="bookBoatPeopleSelectText">Number of people: </div>
							<div className="bookBoatPeopleSelectNumberBox">
								<img className="bookBoatMinus" src="../images/minusIcon.png" alt="minus" />
								<div className="bookBoatPeopleNumber">3</div>
								<img className="bookBoatPlus" src="../images/plusIcon.png" alt="plus" />
							</div>
						</div>
						<div className="bookBoatSkipperSelect">
							<img className="steeringIcon" src="../images/steeringIcon.png" alt="steering" />
							<div className="skipperSelectText">Skipper</div>
							<div className="skipperSelectChoiceTrue">yes</div>
							<div className="skipperSelectChoiceFalse">no</div>
							<div className="skipperSelectPriceBox">
								<div className="skipperSelectPrice">320<span>€</span></div>
								<div className="skipperSelectText">per day</div>
							</div>
						</div>
						<div className="bookBoatPetsSelect">
							<img className="petsIcon" src="../images/petsIcon.png" alt="steering" />
							<div className="petsSelectText">Pets</div>
							<div className="petsSelectChoiceFalse">yes</div>
							<div className="petsSelectChoiceTrue">no</div>
							<div className="petsSelectPriceBox">
								<div className="petsSelectPrice">12<span>€</span></div>
								<div className="petsSelectText">per day</div>
							</div>
						</div>
						<a href="#" className="bookBoatButton">Book now</a>
						<div className="bookBoatHelp">Have a question? Call <span>+(0) 385 91 5386 369</span></div>
					</div>
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