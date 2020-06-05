import React from "react";
import "./sectionTwo.css";

import ProgressBar from "./progressBar/progressBar";

const sectionTwo = ({ homePage }) => {
    const renderSectionTwo = () => {
        return homePage.map((item, index) => (
            <div className="sectionTwo__container">
                <h2>{item.description}</h2>
                <div className="sectionTwo__tabs__container">
                    <div className="sectionTwo__tabs">
                        <div>Section 1</div>
                    </div>
                    <div className="sectionTwo__tabs">
                        <div> Section 2 </div>
                        <div className="sectionTwo__circle"></div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <section id="sectionTwo">
            {console.log(homePage)}
            {renderSectionTwo()}
            <div
                style={{
                    height: "15px",
                }}
            ></div>
            <ProgressBar percentage={100} />
        </section>
    );
};

export default sectionTwo;
