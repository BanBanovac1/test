import React from 'react';

export default class SliderItem extends React.Component {
    render() {
        return (
            <div className="sliderItem">
                <img src="../images/sliderImage.png" alt="place" />
                <div className="sliderItemPriceBox">
                    <div className="sliderItemPrice">110<span>€</span></div>
                    <div className="sliderItemPriceText">PER PERSON</div>
                </div>
                <div className="sliderItemInfo">
                    <div className="sliderItemInfoText">ONE DAY, ONE ISLAND</div>
                    <div className="sliderItemInfoTitle">Vis island</div>
                    <a href="#" className="sliderItemButton">BOOK A TOUR</a>
                </div>
            </div>

        );
    }
}