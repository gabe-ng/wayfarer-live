import React, { Component } from "react";

class ImageSlide extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: "cover",
      backgroundPositionY: "20%",
      width: "100%",
      height: "100%",
      "margin": "0",
    };

    return (
      <div className="image-slide" style={styles}>
        <h3 className="carousel-city-name">{this.props.city}</h3>
      </div>
    );
  }
}
export default ImageSlide;
