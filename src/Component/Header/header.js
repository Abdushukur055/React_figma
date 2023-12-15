import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <div className="box1">
            <h1>Trevland</h1>

            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Location</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>

            <button className="btn">Booking now</button>
            <span>
              <i class="fa-solid fa-bars fa-beat-fade"></i>
            </span>
          </div>
          <div className="box2">
           <div className="text">
           <h1>Railtrips To Here, There And Everywhere!</h1>
            <p>
              We all wish to start our year the best way possible and also
              according to a common belief if you have a great start to your.
            </p>
           </div>
            <button className="btn2">Explore more</button>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
