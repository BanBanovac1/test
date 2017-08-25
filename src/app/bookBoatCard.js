import React from 'react';

export default class BookBoatCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active1: false,
            active2: false,
            active3: false,
            active4: false
        };

        this.changeChoiceClass = this.changeChoiceClass.bind(this);
    }

    changeChoiceClass(event) {
        let indexValue = event.currentTarget.getAttribute('data-index');
        switch (indexValue) {
            case '1':
                this.setState({ active1: !this.state.active1 , active2: false});
                break;
            case '2':
                this.setState({ active2: !this.state.active2 , active1: false});
                break;
            case '3':
                this.setState({ active3: !this.state.active3, active4: false});
                break;
            case '4':
                this.setState({ active4: !this.state.active4, active3: false });
                break;
            default: break;
        }
    }

    render() {

        return (
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
                    <div data-index={1} className={this.state.active1 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>yes</div>
                    <div data-index={2} className={this.state.active2 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>no</div>
                    <div className="skipperSelectPriceBox">
                        <div className="skipperSelectPrice">320<span>€</span></div>
                        <div className="skipperSelectText">per day</div>
                    </div>
                </div>
                <div className="bookBoatPetsSelect">
                    <img className="petsIcon" src="../images/petsIcon.png" alt="steering" />
                    <div className="petsSelectText">Pets</div>
                    <div data-index={3} className={this.state.active3 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>yes</div>
                    <div data-index={4} className={this.state.active4 ? 'choiceSelect' : 'choiceNotSelect'} onClick={this.changeChoiceClass}>no</div>
                    <div className="petsSelectPriceBox">
                        <div className="petsSelectPrice">12<span>€</span></div>
                        <div className="petsSelectText">per day</div>
                    </div>
                </div>
                <a href="#" className="bookBoatButton">Book now</a>
                <div className="bookBoatHelp">Have a question? Call <span>+(0) 385 91 5386 369</span></div>
            </div>
        );
    }
}


