import React from "react";
import Eye from "../assets/eye.png";

const firstItem = (images) => (
    <div
        className="sectionOne__gallery__item1"
        style={{
            backgroundImage: `url(${images[0].img})`,
        }}
    >
        <div className="overlay">
            <div className="text">
                <img src={Eye} alt="" />
                <p>{images[0].title}</p>
                <div className="sectionOne__gallery__underline"></div>
            </div>
        </div>
    </div>
);

const secondItem = (images) =>
    images.slice(1).map((item) => (
        <div
            className="sectionOne__gallery__flex-item"
            style={{
                backgroundImage: `url(${item.img})`,
            }}
        >
            <div className="overlay">
                <div className="text">
                    <img src={Eye} alt="" />
                    <p>{item.title}</p>
                    <div className="sectionOne__gallery__underline"></div>
                </div>
            </div>
        </div>
    ));

const renderGallery = (images, id) =>
    id ? firstItem(images) : secondItem(images);

export default renderGallery;
