import React, { Component } from 'react';
import Slider from 'react-slick';
import SliderItem from './sliderItem.js';


export default class SliderComponent extends React.Component {

    render() {
        var settings = {
            className: "inner",
            autoplay: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            }
            ]
        };

        return (
            <div className="slider">
                <Slider {...settings}>
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                </Slider>
            </div>
        );
    }
}