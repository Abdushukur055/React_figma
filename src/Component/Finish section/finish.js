import React, { Component } from "react";
import "./finish.scss";
import img1 from "../assets/canada-ontario-niagara-falls-2 1 (1).png";
import img2 from "../assets/hiroshima-japan-1500-1100x825 1.png";
import img3 from "../assets/india-top-attractions-varanasi 1.png";
import img4 from "../assets/Naltar-lake-pakistan 1 (1).png";

class Finish extends Component {
  state = {};
  render() {
    return (
      <div className="finish_section">
        <div className="box1">
          <h1>From Blog & News</h1>
          <p>
            Welcome to Community Conversations, a new interview series featuring
            Intrepid travellers, creatives and activists in our community.
          </p>
        </div>

        <div className="box3">
          <div className="box_item">
            <img className="img1" src={img1} alt="" />
            <h1 className="res1">Banff National Park</h1>
            <p className="p1">
              Banff National Park lies in the heart of the majestic Rocky
              Mountains in the province of Alberta, and showcases some of
              Canada's most beautiful scenery. Turquoise-colored lakes,
              snow-capped peaks, and glaciers are all easily accessible
            </p>
          </div>
         <div className="box_items">
         <div className="box5">
            <img className="img5" src={img2} alt="" />
            <div className="text">
            <h1 className="res3">The Hiroshima Peace!</h1>
            <p className="p2">It was formally opened to the public in August that year.</p>
            </div>
          </div>
         <div className="box5">
            <img className="img5" src={img3} alt="" />
            <div className="text">
            <h1 className="res3">The faithful prayers!</h1>
            <p className="p2">A major pilgrimage center for Hindus, the holy city.</p>
            </div>
          </div>
         <div className="box5">
            <img className="img5" src={img4} alt="" />
            <div className="text">
            <h1 className="res3">Colourful waters!</h1>
            <p className="p2">Forest-driven water and energy cycles are poorly.</p>
            </div>
          </div>
         </div>
        </div>
      </div>
    );
  }
}

export default Finish;
