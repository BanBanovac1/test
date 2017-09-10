import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';

const totalPrice = "360";
const priceSkipper = "320";
const pricePets = "12";

export default class BookBoatCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            dateCheckIn: "Check in date",
            dateCheckOut: "Check out date",
            numberOfPeople: 3
        };

        this.changeChoiceClass = this.changeChoiceClass.bind(this);
        this.onDatePickerInChange = this.onDatePickerInChange.bind(this);
        this.onDatePickerOutChange = this.onDatePickerOutChange.bind(this);
        this.increasePeople = this.increasePeople.bind(this);
        this.decreasePeople = this.decreasePeople.bind(this);
        this.checkDates = this.checkDates.bind(this);
    }

    changeChoiceClass(event) {
        let indexValue = event.currentTarget.getAttribute('data-index');
        switch (indexValue) {
            case '1':
                this.setState({ active1: !this.state.active1, active2: false });
                break;
            case '2':
                this.setState({ active2: !this.state.active2, active1: false });
                break;
            case '3':
                this.setState({ active3: !this.state.active3, active4: false });
                break;
            case '4':
                this.setState({ active4: !this.state.active4, active3: false });
                break;
            default: break;
        }
    }

    onDatePickerInChange(date, dateString) {
        this.setState({ dateCheckIn: dateString });
    }

    onDatePickerOutChange(date, dateString) {
        this.setState({ dateCheckOut: dateString });
    }

    decreasePeople() {
        let numPeople = this.state.numberOfPeople - 1;
        if (numPeople >= 1) {
            this.setState({ numberOfPeople: numPeople });
        }
    }

    increasePeople() {
        let numPeople = this.state.numberOfPeople + 1;
        this.setState({ numberOfPeople: numPeople });
    }

    checkDates() {
        let warning = ReactDOM.findDOMNode(this.refs.datesWarning);
        if (this.state.dateCheckIn === 'Check in date' || this.state.dateCheckOut === 'Check out date') {
            warning.style.display = 'block';
        }
        else {
            warning.style.display = 'none';
            this.props.openPay();
        }
    }



    render() {

        return (
            <div className="bookBoatCard">
                <div ref="datesWarning" className="datesNotSelected">PLEASE SELECT CHECK IN<br/> AND CHECK OUT DATES!</div>
                <div className="bookBoatCardTop">
                    <div className="bookBoatCardTopTitle">TOTAL PRICE:</div>
                    <div className="bookBoatCardTopPriceBox">
                        <div className="bookBoatPrice">{totalPrice}<span>€</span></div>
                        <div className="bookBoatPriceText">Insurance included</div>
                    </div>
                </div>
                <div className="bookBoatCardCheckDate">
                    <div className="checkDateBox">
                        <DatePicker data-index={1} className="datePicker" placeholder="Check in date" onChange={this.onDatePickerInChange} />
                        <img className="dateIcon" src="../../images/dateIcon.png" alt="date" />
                        <div className="checkDateText">{this.state.dateCheckIn}</div>
                        <img className="backIcon" src="../../images/backIcon.png" alt="back" />
                    </div>
                    <div className="checkDateBox right">
                        <DatePicker data-index={2} className="datePicker" placeholder="Check out date" onChange={this.onDatePickerOutChange} />
                        <img className="dateIcon" src="../../images/dateIcon.png" alt="date" />
                        <div className="checkDateText">{this.state.dateCheckOut}</div>
                        <img className="backIcon" src="../../images/backIcon.png" alt="back" />
                    </div>
                </div>
                <div className="bookBoatPeopleSelect">
                    <img className="bookBoatPeopleIcon" src="../../images/peopleIcon.png" alt="people" />
                    <div className="bookBoatPeopleSelectText">Number of people: </div>
                    <div className="bookBoatPeopleSelectNumberBox">
                        <img className="bookBoatMinus" src="../../images/minusIcon.png" alt="minus" onClick={this.decreasePeople} />
                        <div className="bookBoatPeopleNumber">{this.state.numberOfPeople}</div>
                        <img className="bookBoatPlus" src="../../images/plusIcon.png" alt="plus" onClick={this.increasePeople} />
                    </div>
                </div>
                <div className="bookBoatSkipperSelect">
                    <img className="steeringIcon" src="../../images/steeringIcon.png" alt="steering" />
                    <div className="skipperSelectText">Skipper</div>
                    <div data-index={1} className={this.state.active1 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>yes</div>
                    <div data-index={2} className={this.state.active2 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>no</div>
                    <div className="skipperSelectPriceBox">
                        <div className={this.state.active1 ? 'selectPriceYes' : 'selectPriceNo'}>{priceSkipper}<span>€</span></div>
                        <div className={this.state.active1 ? 'selectPriceTextYes' : 'selectPriceTextNo'}>per day</div>
                    </div>
                </div>
                <div className="bookBoatPetsSelect">
                    <img className="petsIcon" src="../../images/petsIcon.png" alt="steering" />
                    <div className="petsSelectText">Pets</div>
                    <div data-index={3} className={this.state.active3 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>yes</div>
                    <div data-index={4} className={this.state.active4 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>no</div>
                    <div className="petsSelectPriceBox">
                        <div className={this.state.active3 ? 'selectPriceYes' : 'selectPriceNo'}>{pricePets}<span>€</span></div>
                        <div className={this.state.active3 ? 'selectPriceTextYes' : 'selectPriceTextNo'}>per day</div>
                    </div>
                </div>
                <a className="bookBoatButton" onClick={this.checkDates}>Book now</a>
                <div className="bookBoatHelp">Have a question? Call <span>+(0) 385 91 5386 369</span></div>
            </div>
        );
    }
}


