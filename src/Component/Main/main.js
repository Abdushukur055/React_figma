import React, { Component } from "react";
import "./main.scss";
import img1 from "../assets/img2.png";
import img2 from "../assets/img3.png";
import img3 from "../assets/img4.png";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <main>
          <div className="box1">
            <h1>Popular Location</h1>
            <p>
              For every one of us, travel came first. We’ve spent years living
              as nomads, pioneers, and voyagers— from island hopping in the
            </p>
          </div>
          <div className="box3">
          <div className="box2">
            <div className="box2_items">
              <img src={img1} alt="" />
              <div className="text">
              <h1 className="res1">Istanbul, Turkey</h1>
              <p className="par1">Istanbul is a major city in Turkey that straddles Europe.</p>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="box2_items">
              <img src={img2} alt="" />
              <div className="text">
              <h1 className="res1">Kuala Lumpur, malaysia</h1>
              <p className="par1">A 272-step long trek leads you to this century.</p>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="box2_items">
              <img src={img3} alt="" />
              <div className="text">
              <h1 className="res1">Seoul, South Korea</h1>
              <p className="par1">South Korea officially the Republic of Korea is a country in East Asia.</p>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
