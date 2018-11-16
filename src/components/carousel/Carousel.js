import React, { Component } from "react";

import Arrow from "./Arrow";
import ImageSlide from "./ImageSlide";

import London from "../../images/London.png";
import SanFrancisco from "../../images/SanFrancisco.png";
import Dubai from "../../images/Dubai.png";
import Sydney from "../../images/Sydney.png";
import Moscow from "../../images/Moscow.png";

let imgUrls = [Dubai, London, Moscow, SanFrancisco, Sydney];
let cities = ["Dubai", "London", "Moscow", "San Francisco", "Sydney"];

class HomeCarousel extends Component {
  state = {
    currentImageIndex: 0,
    timer: 5,
    currentTimeout: null
  };

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index,
      timer: 5
    });
  };

  decrementTime = () => {
    if (this.state.timer === 0) {
      this.setState({
        currentTimeout: window.clearInterval(this.decrementTime),
      });
      this.nextSlide();
    } else {
      this.setState({
        timer: this.state.timer - 1
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      currentTimeout: window.setInterval(this.decrementTime, 1000)
    });
  }

  render() {
    let styles;

    if (this.props.loggedIn === 'true')  {
      styles = { height: "65vh" }
    } else {
      styles = { height: "80vh" }
    }
    

    return (
      <div className="carousel" id="carousel" style={styles}>
        <ImageSlide
          url={imgUrls[this.state.currentImageIndex]}
          city={cities[this.state.currentImageIndex]}
        />

        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />

        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}

export default HomeCarousel;

