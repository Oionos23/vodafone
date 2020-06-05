import React, { useEffect } from "react";
import SearchBar from "./searchBar";
import MenuSlider from "../slider";
import renderMenuTitles from "../utils/renderMenuTittles";

import "./menu.css";

const Menu = ({ slider, menu }) => {
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos < currentScrollPos) {
                document.getElementById("menu").style.top = "-110px";
            } else {
                document.getElementById("menu").style.top = "0";
            }
            prevScrollpos = currentScrollPos;
        };
    }, []);

    return (
        <header className="menu" id="menu">
            <nav className="menu__container">
                <div className="menu__tabs">{renderMenuTitles(menu)}</div>
                <div className="searchButton push">
                    <SearchBar />
                </div>
            </nav>
            <MenuSlider slider={slider} />
        </header>
    );
};

export default Menu;
