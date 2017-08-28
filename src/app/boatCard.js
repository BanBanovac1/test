import React from 'react';

const boatName = 'Jeanneau Merry Fisher 456';
const boatAddress = 'Kaštel Gomilica, Marka Marulića...';
const numOfPeople = '8 people';
const speed = '70 knots';
const numOfBeds = '4 beds';
const buildDate = 'Built in 2017';
const price = '320';


export default class BoatCardComponent extends React.Component {
    render() {
        return (
            <div className="boatCard">
                <div className="boatCardImg">
                    <img src="../images/boat.png" alt="boat" />
                </div>
                <div className="boatName">{boatName}</div>
                <div className="boatAddress">{boatAddress}</div>
                <div className="boatCardRowOne">
                    <img className="boatCardPeopleIcon" src="../images/peopleIcon.png" alt="boatIcon" />
                    <div className="boatCardRowText">{numOfPeople}</div>
                    <img className="boatCardSpeedIcon" src="../images/speedIcon.png" alt="boatIcon" />
                    <div className="boatCardRowText">{speed}</div>
                </div>
                <div className="boatCardRowTwo">
                    <img className="boatCardBedIcon" src="../images/bedIcon.png" alt="boatIcon" />
                    <div className="boatCardRowText">{numOfBeds}</div>
                    <img className="boatCardWrenchIcon" src="../images/wrenchIcon.png" alt="boatIcon" />
                    <div className="boatCardRowText">{buildDate}</div>
                </div>
                <div className="boatCardPriceButtonAlign">
                    <div className="boatCardPriceBox">
                        <div className="boatCardPrice">{price}<span>€</span></div>
                        <div className="boatCardPriceText">per day</div>
                    </div>
                    <a href="#" className="boatCardButton">Book Now</a>
                </div>
            </div>
        );
    }
}


