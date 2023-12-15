import React, { Component } from "react";
import "./footer.scss";
import logo from "../assets/Group 173.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="box1">
          <ul>
            <li>
              <a className="link" href="">
                Traveland
              </a>
            </li>
            <li>Contact us</li>
            <li>@shovasatkhira88.com</li>
            <li>
              <img src={logo} alt="" />
            </li>
          </ul>
          <ul>
            <li>Services</li>
            <li>Services</li>
            <li>About</li>
            <li>Our story</li>
            <li>Benefits</li>
            <li>Branding</li>
          </ul>
          <ul>
            <li>Legal</li>
            <li>Terms & Conditions</li>
            <li>Privecy Policy</li>
            <li>Terms of use</li>
          </ul>
          <ul>
            <li>SUBSCRIBE NOW</li>

            <div className="box">
                <input type="text" placeholder="Email" />
                <button>Send</button>
            </div>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
