import React, { Component } from "react";

import London from "../images/London.png";
import SanFrancisco from "../images/SanFrancisco.png";
import Dubai from "../images/Dubai.png";
import Sydney from "../images/Sydney.png";
import Moscow from "../images/Moscow.png";

class Cities extends Component {

  setActiveCity = (event) => {
    let currActive = document.querySelector(".city-list-active");
    currActive.classList.remove("city-list-active");

    if (event.target.tagName === "DIV") {
      event.target.classList.add("city-list-active");
    } else {
      event.target.parentNode.classList.add("city-list-active");
    }
  }

  changeCityView = (event, city) => {
    event.stopPropagation();
      this.setActiveCity(event);
      switch(city) {
        case "sf":
          this.props.toggleSf();
          break;
        case "lon": 
          this.props.toggleLon();
          break;
        case "syd":
          this.props.toggleSyd();
          break;
        case "mos":
          this.props.toggleMos();
          break;
        default:
          this.props.toggleDub();
          break;
        }
  }

  render() {
    return <div className="city-list-container">
        <h1>Cities</h1>
        <section className="city-list">
        <div className="city-list-item city-list-active" onClick={(event) => { this.changeCityView(event, "dub") }}>
          <img src={Dubai} alt="Burj Al Arab" />
          <h2>Dubai</h2>
        </div>
        <div className="city-list-item" onClick={(event) => { this.changeCityView(event, "lon") }}>
          <img src={London} alt="Buckingham Palace" />
          <h2>London</h2>
        </div>
        <div className="city-list-item" onClick={(event) => { this.changeCityView(event, "mos") }}>
          <img src={Moscow} alt="Kremlin" />
          <h2>Moscow</h2>
        </div>
        <div className="city-list-item" onClick={(event) => { this.changeCityView(event, "sf") } }>
            <img src={SanFrancisco} alt="Golden Gate Bridge" />
            <h2>San Francisco</h2>
        </div>
        <div className="city-list-item" onClick={(event) => { this.changeCityView(event, "syd") }}>
            <img src={Sydney} alt="Sydney Opera House" />
            <h2>Sydney</h2>
        </div>
        
        
        </section>
      </div>;
  }
}

export default Cities;
