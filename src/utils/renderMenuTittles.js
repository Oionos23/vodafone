import React from "react";

const renderMenuTitles = (menu) => {
    return menu.map((item, index) => {
        return (
            <div className="menu__title" key={index}>
                {item.title}
                <div
                    className={
                        item.title === "Home" ? "menu__circle" : undefined
                    }
                ></div>
            </div>
        );
    });
};

export default renderMenuTitles;
