import React from "react";
import "./sectionOne.css";
import renderGallery from "../helpers/renderGallery";

const sectionOne = ({ homePage, images }) => {
    const renderSectionOne = () => {
        return homePage.map((item, index) => (
            <div className="sectionOne__container">
                <h2>{item.description}</h2>
                <div className="sectionOne__tabs__container">
                    <div className="sectionOne__tabs">
                        <div>Section 1</div>
                        <div className="sectionOne__circle"></div>
                    </div>
                    <div className="sectionOne__tabs">Section 2</div>
                </div>
            </div>
        ));
    };

    return (
        <section id="sectionOne">
            {renderSectionOne()}
            {images.length > 0 && (
                <div class="sectionOne__gallery">
                    {renderGallery(images, 1)}
                    <div class="sectionOne__gallery__item2">
                        {renderGallery(images)}
                    </div>
                </div>
            )}
        </section>
    );
};

export default sectionOne;
