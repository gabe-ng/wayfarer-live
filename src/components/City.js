import React, { Component } from "react";

import PostContainer from "../containers/PostContainer";
import SanFrancisco from "../images/SanFrancisco.png";
import Dubai from "../images/Dubai.png";
import Sydney from "../images/Sydney.png";
import London from "../images/London.png";
import Moscow from "../images/Moscow.png";

class City extends Component {

  render() {

    let styles;

    if (this.props.city === "San Francisco") {
      styles = { 
        backgroundImage: `url(${SanFrancisco})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    } else if (this.props.city === "London") {
      styles = {
        backgroundImage: `url(${London})`,
        backgroundRepeat: "no-repeat",
      }
    } else if (this.props.city === "Sydney") {
      styles = {
        backgroundImage: `url(${Sydney})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    } else if (this.props.city === "Dubai") {
      styles = {
        backgroundImage: `url(${Dubai})`,
        backgroundRepeat: "no-repeat",
      }
    } else {
      styles = {
        backgroundImage: `url(${Moscow})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    }

    let country = (this.props.city === "San Francisco")
      ? <h3>United States</h3>
      : (this.props.city === "London")
        ? <h3>United Kingdom</h3>
        : (this.props.city === "Sydney")
          ? <h3>Australia</h3>
          : (this.props.city === "Moscow")
            ? <h3>Russia</h3>
            : <h3>United Arab Emirates</h3>

    return (
      <div className="city-container" style={styles}>
        <section className="city-country-title">
          <div className="city-country-name">
            <h1>{this.props.city}</h1>
            {country}
          </div>
        </section>
        <PostContainer 
          city={this.props.city}
          newCity={this.props.cityUpdate}
          toggleCityUpdate={this.props.toggleCityUpdate}/>
      </div>
    );
  }
}

export default City;
