var React = require('react');

export default class BoatCardComponent extends React.Component {
    render() {
        return (
            <div className="boatCard">
                <div className="boatCardImg">
                    <img src="../images/boat.png" alt="boat" />
                </div>
                <div className="boatName">Jeanneau Merry Fisher 456</div>
                <div className="boatAddress">Kaštel Gomilica, Marka Marulića...</div>
                <div className="boatCardRowOne">
                    <img className="boatCardPeopleIcon" src="../images/peopleIcon.png" alt="boatIcon" />
                    <div className="boatCardRowText">8 people</div>
                    <img className="boatCardSpeedIcon" src="../images/speedIcon.png" alt="boatIcon" />
                    <div className="boatCardRowText">70 knots</div>
                </div>
                <div className="boatCardRowTwo">
                    <img className="boatCardBedIcon" src="../images/bedIcon.png" alt="boatIcon" />
                    <div className="boatCardRowText">4 beds</div>
                    <img className="boatCardWrenchIcon" src="../images/wrenchIcon.png" alt="boatIcon" />
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
        );
    }
}


