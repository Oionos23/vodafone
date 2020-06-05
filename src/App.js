import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import Menu from "./menu";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";

class App extends Component {
    constructor() {
        super();
        this.state = {
            menu: [],
            homePage: [],
            slider: [],
            sectionOneImages: [],
        };
    }

    componentDidMount() {
        $.ajax({
            type: "GET",
            url: "https://voda-react-assessment.herokuapp.com/home",
            success: (response) => {
                let sectionOneImages = response[0].sections[0].images;
                this.setState({
                    sectionOneImages,
                    homePage: response,
                });
            },
            error: function (err) {
                console.log(err);
            },
        });

        $.ajax({
            type: "GET",
            url: "https://voda-react-assessment.herokuapp.com/slider",
            success: (response) => {
                this.setState({
                    slider: response,
                });
            },
            error: function (err) {
                console.log(err);
            },
        });

        $.ajax({
            type: "GET",
            url: "https://voda-react-assessment.herokuapp.com/menu",
            success: (response) => {
                console.log(response);
                this.setState({
                    menu: response,
                });
            },
            error: function (err) {
                console.log(err);
            },
        });
    }

    render() {
        return (
            <>
                <Menu slider={this.state.slider} menu={this.state.menu} />
                <SectionOne
                    homePage={this.state.homePage}
                    images={this.state.sectionOneImages}
                />

                <SectionTwo homePage={this.state.homePage} />
            </>
        );
    }
}

export default App;
