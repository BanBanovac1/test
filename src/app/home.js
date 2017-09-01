import React from 'react';
import HeaderComponent from './header.js';
import SliderItem from './sliderItem.js';
import SliderComponent from './slider.js';

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <HeaderComponent />
                <div className="featuredTrips">
                    <img className="backgroundLeft" src="../images/tripsBackground.png" alt="glass" />
                    <img className="backgroundRight" src="../images/tripsBackground1.png" alt="plant" />
                    <div className="featuredTripsTitle"><span>Featured </span>trips</div>
                    <div className="featuredTripsText">
                        Lored khalem ipsum is a major key to success. The key to succes is to keep your
                        head above the water, never give up. You smart, you loyal, you a genious.
                    </div>
                    <div className="featuredTripsImageSlider">
                        <SliderComponent />
                    </div>

                    <a className="featuredTripsLink" href="#">
                        <div className="featuredTripsLinkText">DISCOVER MORE</div>
                        <img src="../images/forwardIcon.png" alt="forward" />
                    </a>
                </div>
                <div className="rentSection">
                    <div className="rentSectionContent">
                        <div className="rentSectionTitle"><span>Rent </span> a boat & explore nature</div>
                        <div className="rentSectionText">
                            Lored khalem ipsum is a major key to success. The key to succes is to keep your
                            head above the water, never give up. You smart, you loyal, you a genious.
                        </div>
                        <a className="rentSectionLink">
                            <div className="rentSectionLinkText">RENT A BOAT</div>
                            <img src="../images/forwardIcon.png" alt="forward" />
                        </a>
                    </div>
                </div>
                <div className="bookSection">
                    <div className="bookSectionContent">
                        <div className="bookSectionTitle"><span>Book </span> a whole house for whole family</div>
                        <div className="bookSectionText">
                            Lored khalem ipsum is a major key to success. The key to succes is to keep your
                            head above the water, never give up. You smart, you loyal, you a genious.
                        </div>
                        <a className="bookSectionLink">
                            <div className="bookSectionLinkText">FIND APARTMENT</div>
                            <img src="../images/forwardIconWhite.png" alt="forward" />
                        </a>
                    </div>
                </div>
                <div className="excursionSection">
                    <img className="excursionSectionImage" src="../images/beach.png" alt="beach" />
                    <img className="excursionSectionImage" src="../images/island1.png" alt="island" />
                    <img className="excursionSectionImage" src="../images/caves.png" alt="caves" />
                    <img className="excursionSectionImage" src="../images/island2.png" alt="island" />
                    <div className="excursionSectionTitle"><span>Private excursion </span> are created to feel Croatia</div>
                    <div className="excursionSectionText">
                        Lored khalem ipsum is a major key to success. The key to succes is to keep your
                        head above the water, never give up. You smart, you loyal, you a genious.
                    </div>
                    <div className="excursionSectionItem">
                        <div className="excursionSectionItemInfoButton">#BEACH</div>
                        <div className="excursionSectionItemTitle"><span>Discover </span> top world beaches</div>
                        <div className="excursionSectionItemText">
                            Lored khalem ipsum is a major key to success. The key to succes is to keep your
                            head above the water, never give up. You smart, you loyal, you a genious.
                        </div>
                    </div>
                    <div className="excursionSectionItem">
                        <div className="excursionSectionItemInfoButton">#OLD TOWN</div>
                        <div className="excursionSectionItemTitle"><span>History </span>saved in stone city</div>
                        <div className="excursionSectionItemText">
                            Lored khalem ipsum is a major key to success. The key to succes is to keep your
                            head above the water, never give up. You smart, you loyal, you a genious.
                        </div>
                    </div>
                    <div className="excursionSectionItem">
                        <div className="excursionSectionItemInfoButton">#ISLANDS&CAVES</div>
                        <div className="excursionSectionItemTitle"><span>Discover </span> top world beaches</div>
                        <div className="excursionSectionItemText">
                            Lored khalem ipsum is a major key to success. The key to succes is to keep your
                            head above the water, never give up. You smart, you loyal, you a genious.
                        </div>
                    </div>
                </div>
                <div className="helpSection">
                    <img className="helpSectionIcon" src="../images/phoneIcon.png" alt="phone" />
                    <img className="helpSectionIcon" src="../images/mailIcon.png" alt="mail" />
                    <div className="helpSectionContent">
                        <img className="callCenterImage" src="../images/callCenter.png" alt="callCenter" />
                        <div className="helpSectionTitle"><span>Always </span>here to help you.</div>
                        <div className="helpSectionText">
                            Lored khalem ipsum is a major key to success. The key to succes is to keep your
                            head above the water, never give up. You smart, you loyal, you a genious.
                        </div>
                        <a href="#" className="helpSectionButton">
                            <div className="helpSectionButtonText">Contact Us</div>
                            <img src="../images/forwardIconWhite.png" alt="forward" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}