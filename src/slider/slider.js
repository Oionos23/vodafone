import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuSlider = ({ slider }) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
    };

    const renderSlides = () => {
        return slider.map((item) => (
            <div className="menuSlider__item">
                <img src={item.image} alt="" />

                <div className="menuSlider__title">
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                </div>
            </div>
        ));
    };

    return <Slider {...settings}>{renderSlides()}</Slider>;
};

export default MenuSlider;
