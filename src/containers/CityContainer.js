import React, { Component } from "react";

import Cities from "../components/Cities";
import City from "../components/City";

class CityContainer extends Component {
  state = {
    currentCity: "Dubai",
    cityUpdated: false
  };

  toggleCityUpdate = () => {
    this.setState({ cityUpdated: !this.state.cityUpdated });
  };

  setCitySanFrancisco = () => {
    this.setState({
      currentCity: "San Francisco",
      cityUpdated: !this.state.cityUpdated
    });
  };

  setCityLondon = () => {
    this.setState({
      currentCity: "London",
      cityUpdated: !this.state.cityUpdated
    });
  };

  setCitySydney = () => {
    this.setState({
      currentCity: "Sydney",
      cityUpdated: !this.state.cityUpdated
    });
  };

  setCityDubai = () => {
    this.setState({
      currentCity: "Dubai",
      cityUpdated: !this.state.cityUpdated
    });
  };

  setCityMoscow = () => {
    this.setState({
      currentCity: "Moscow",
      cityUpdated: !this.state.cityUpdated
    });
  };

  render() {
    return (
      <div className="homepage">
        <Cities
          city={this.state.currentCity}
          toggleSf={this.setCitySanFrancisco}
          toggleLon={this.setCityLondon}
          toggleSyd={this.setCitySydney}
          toggleDub={this.setCityDubai}
          toggleMos={this.setCityMoscow}
          toggleCityUpdate={this.toggleCityUpdate}
        />
        <City
          city={this.state.currentCity}
          cityUpdate={this.state.cityUpdated}
          toggleCityUpdate={this.toggleCityUpdate}
        />
      </div>
    );
  }
}

export default CityContainer;
