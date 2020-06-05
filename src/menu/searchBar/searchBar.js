import React, { Component } from "react";

import "./searchBar.css";
import searchGlass from "../../assets/search.svg";
import findInPage from "../../utils/findInPage";

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            searchInput: "",
        };
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.removeActiveClass = this.removeActiveClass.bind(this);
        this.changeSearchActiveStatus = this.changeSearchActiveStatus.bind(
            this
        );
    }

    handleSearchInput = (event) => {
        this.setState({
            searchInput: event,
        });
    };

    removeActiveClass = () => {
        if (
            document
                .querySelector(".searchBar__input")
                .classList.contains("activated")
        ) {
            this.changeSearchActiveStatus();
        }
    };

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            findInPage(this.state.searchInput);
        }
    };

    changeSearchActiveStatus = () => {
        this.setState((prevState) => ({
            active: !prevState.active,
        }));
    };

    render() {
        return (
            <div className="searchBar">
                <input
                    type="text"
                    value={this.state.searchInput}
                    onKeyPress={(e) => this.handleKeyPress(e)}
                    onChange={(e) => this.handleSearchInput(e.target.value)}
                    className={
                        this.state.active
                            ? "searchBar__input activated"
                            : "searchBar__input"
                    }
                    onBlur={() => this.removeActiveClass()}
                />
                <div
                    onClick={() => this.changeSearchActiveStatus()}
                    className={
                        this.state.active
                            ? "searchBar__glass pointer searchBar__glass__moved"
                            : "searchBar__glass pointer"
                    }
                >
                    <img src={searchGlass} alt="Search Icon" />
                </div>
            </div>
        );
    }
}

export default SearchBar;
