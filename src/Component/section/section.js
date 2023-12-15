import React, { Component } from "react";
import "./section.scss";
import img5 from "../assets/img5.png";
import logo from "../assets/Group 40 (1).svg"
import logo2 from "../assets/Star 1 (2).svg"
import img6 from "../assets/china-great-wall-and-mountain 1.png"
import img7 from "../assets/Discover-sajek-valley 2.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"

class Section extends Component {
  state = {};
  render() {
    return (
      <section>
        <div className="box1">
          <h1>Special Offers</h1>
          <p>
            With the New Year comes a refreshing sense of wanderlust, a longing
            in our souls to escape to warmer climates
          </p>
        </div>

        <div className="box-item">
          <div className="box2">
            <img className="img1" src={img5} alt="" />
            <h1 className="res1">Statue of Liberty.</h1>

            <div className="box-child">
                <div className="text1">
                    <img src={logo} alt="" />
                    <h1 className="res2">New York</h1>
                </div>
                <div className="text1">
                    <img src={logo2} alt="" />
                    <h1 className="res2">4.8</h1>
                </div>
            </div>

            <h1 className="res4">4 Day 5 Nights</h1>
            <h2 className="res5"><b>$450/</b>person</h2>
          </div>
          <div className="box2">
            <img src={img6} alt="" />
            <h1 className="res1">The Great Wall </h1>

            <div className="box-child">
                <div className="text1">
                    <img src={logo} alt="" />
                    <h1 className="res2">China </h1>
                </div>
                <div className="text1">
                    <img src={logo2} alt="" />
                    <h1 className="res2">4.9</h1>
                </div>
            </div>

            <h1 className="res4">7 Day 8 Nights</h1>
            <h2 className="res5"><b>$850/</b>person</h2>
          </div>
          <div className="box2">
            <img src={img7} alt="" />
            <h1 className="res1">Dizin</h1>

            <div className="box-child">
                <div className="text1">
                    <img src={logo} alt="" />
                    <h1 className="res2">Iran</h1>
                </div>
                <div className="text1">
                    <img src={logo2} alt="" />
                    <h1 className="res2">4.6</h1>
                </div>
            </div>

            <h1 className="res4">5 Day 6 Nights</h1>
            <h2 className="res5"><b>$550/</b>person</h2>
          </div>
          <div className="box2">
            <img src={img8} alt="" />
            <h1 className="res1">Sajek Valley</h1>

            <div className="box-child">
                <div className="text1">
                    <img src={logo} alt="" />
                    <h1 className="res2">Bangladesh</h1>
                </div>
                <div className="text1">
                    <img src={logo2} alt="" />
                    <h1 className="res2">4.8</h1>
                </div>
            </div>

            <h1 className="res4">3 Day 4 Nights</h1>
            <h2 className="res5"><b>$400/</b>person</h2>
          </div>
          <div className="box2">
            <img src={img9} alt="" />
            <h1 className="res1">Osaka Castle</h1>

            <div className="box-child">
                <div className="text1">
                    <img src={logo} alt="" />
                    <h1 className="res2">Japan</h1>
                </div>
                <div className="text1">
                    <img src={logo2} alt="" />
                    <h1 className="res2">4.7</h1>
                </div>
            </div>

            <h1 className="res4">4 Day 5 Nights</h1>
            <h2 className="res5"><b>$700/</b>person</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Section;
