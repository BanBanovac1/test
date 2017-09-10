import React from 'react';
import ReactDOM from 'react-dom';
import OverlayPayment from '../components/overlayPayment.js';
import HeaderBoat from '../components/headerBoat.js';
import MapContainer from '../components/mapContainer.js';
import Footer from '../components/footer.js';

const aboutBoat = "Lorem Khaled Ipsum is a major key to success. The key is to drink coconut, " +
    "fresh coconut, trust me. In life you have to take the trash out, if you have " +
    "trash in your life, take it out, throw it away, get rid of it, major key. Look " +
    "at the sunset, life is amazing, life is beautiful, life is what you make it. " +
    "You smart, you loyal, you a genius. In life there will be road blocks but we will " +
    "over come it. Learning is cool, but knowing is better, and I know the key to success.";
const contentText = "Lorem Khaled Ipsum is a major key to success. The key is to drink coconut, " +
    "fresh coconut, trust me. In life you have to take the trash out, if you have " +
    "trash in your life, take it out, throw it away, get rid of it, major key. Look " +
    "at the sunset, life is amazing, life is beautiful, life is what you make it. " +
    "You smart, you loyal, you a genius. In life there will be road blocks but we will " +
    "over come it. Learning is cool, but knowing is better, and I know the key to success.";
const row3Items = ["37m leight", "5,5m height", "70 knots", "320L", "5 people", "3 beds"];
const row4Items = ["Wi-fi", "TV", "Air conditioning", "Smoking", "Pet friendly", "Kitchen", "Parking", "Shower", "Radio", "GPS", "Fridge", "Full sail equipment"];
const checkInTime = "10:00h";
const checkOutTime = "15:00h";
const location = "Priova 4, Kaštel Gomilica, 21213";


export default class BoatSelected extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPaymentOpen: false
        };

        this.updatePaymentState = this.updatePaymentState.bind(this);
        this.handlePaymentForm = this.handlePaymentForm.bind(this);

    }


    updatePaymentState() {
        this.setState({ isPaymentOpen: !this.state.isPaymentOpen }, function () {
            this.handlePaymentForm();
        });
    }

    handlePaymentForm() {
        let overlayPayment = ReactDOM.findDOMNode(this.refs.overlayPayment);
        if (this.state.isPaymentOpen === true) {
            overlayPayment.style.display = 'block';
        }
        else {
            overlayPayment.style.display = 'none';
        }
    }

    render() {
        return (
            <div className="boatSelected">
                <OverlayPayment ref="overlayPayment" triggerUpdatePaymentState={this.updatePaymentState} />
                <HeaderBoat triggerUpdatePaymentState={this.updatePaymentState} />
                <div className="boatSelectedMain">
                    <div className="mainRow1">
                        <div className="row1Label">Main info</div>
                        <div className="row1Content">
                            <div className="contentItem">
                                <img className="contentItemIcon" src="../../images/boatLargeIcon.png" alt="icon" />
                                <div className="contentItemText">Sail boat</div>
                            </div>
                            <div className="contentItem">
                                <img className="contentItemIcon" src="../../images/speedLargeIcon.png" alt="icon" />
                                <div className="contentItemText">70 knots</div>
                            </div>
                            <div className="contentItem">
                                <img className="contentItemIcon" src="../../images/headIcon.png" alt="icon" />
                                <div className="contentItemText">5 people</div>
                            </div>
                            <div className="contentItem">
                                <img className="contentItemIcon" src="../../images/doorIcon.png" alt="icon" />
                                <div className="contentItemText">2 cabins</div>
                            </div>
                        </div>
                    </div>
                    <div className="mainRow2">
                        <div className="row2Label">About boat</div>
                        <div className="row2Text">
                            {aboutBoat}
                        </div>
                    </div>
                    <div className="mainRow3">
                        <div className="row3Label">General</div>
                        <div className="row3Content">
                            <div className="contentColumn1">
                                <div className="contentColumn1Item">
                                    <img src="../../images/houseIcon.png" alt="icon" />
                                    <div className="contentColumn1Text">{row3Items[0]}</div>
                                </div>
                                <div className="contentColumn1Item">
                                    <img src="../../images/houseIcon.png" alt="icon" />
                                    <div className="contentColumn1Text">{row3Items[1]}</div>
                                </div>
                                <div className="contentColumn1Item">
                                    <img src="../../images/houseIcon.png" alt="icon" />
                                    <div className="contentColumn1Text">{row3Items[2]}</div>
                                </div>
                            </div>
                            <div className="contentColumn2">
                                <div className="contentColumn2Item">
                                    <img src="../../images/houseIcon.png" alt="icon" />
                                    <div className="contentColumn2Text">{row3Items[3]}</div>
                                </div>
                                <div className="contentColumn2Item">
                                    <img src="../../images/houseIcon.png" alt="icon" />
                                    <div className="contentColumn2Text">{row3Items[4]}</div>
                                </div>
                                <div className="contentColumn2Item">
                                    <img src="../../images/houseIcon.png" alt="icon" />
                                    <div className="contentColumn2Text">{row3Items[5]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainRow4">
                        <div className="row4Label">Content</div>
                        <div className="row4Content">
                            <div className="contentText">
                                {contentText}
                            </div>
                            <div className="contentColumns">
                                <div className="column1">
                                    <div className="column1Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[0]}</div>
                                    </div>
                                    <div className="column1Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[1]}</div>
                                    </div>
                                    <div className="column1Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[2]}</div>
                                    </div>
                                    <div className="column1Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[3]}</div>
                                    </div>
                                    <div className="column1Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[4]}</div>
                                    </div>
                                </div>
                                <div className="column2">
                                    <div className="column2Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[5]}</div>
                                    </div>
                                    <div className="column2Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[6]}</div>
                                    </div>
                                    <div className="column2Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[7]}</div>
                                    </div>
                                    <div className="column2Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[8]}</div>
                                    </div>
                                    <div className="column2Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[9]}</div>
                                    </div>
                                </div>
                                <div className="column3">
                                    <div className="column3Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[10]}</div>
                                    </div>
                                    <div className="column3Item">
                                        <img src="../../images/houseIcon.png" alt="icon" />
                                        <div className="itemText">{row4Items[11]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mainRow5">
                        <div className="row5Label">Check in/out</div>
                        <div className="row5Content">
                            <div className="contentCheckIn">Check in: <span>{checkInTime}</span></div>
                            <div className="contentCheckOut">Check out: <span>{checkOutTime}</span></div>
                        </div>
                    </div>
                    <div className="mainRow6">
                        <div className="row6Label">Location</div>
                        <div className="row6Content">{location}</div>
                    </div>
                </div>
                <div className="mapContainerBox">
                    <MapContainer />
                </div>
                <Footer />
            </div>

        );
    }
}