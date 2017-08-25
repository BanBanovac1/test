var React = require('react');

export default class BookTourCardComponent extends React.Component {
    render() {
        return (
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
        );
    }
}


