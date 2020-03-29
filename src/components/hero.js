import React from "react"
import Img from "gatsby-image"

const Hero = (props) => {
  return (
    <>
      <Img
        className="hero"
        title="Richmond"
        alt="Richmond Skyline"
        fluid={props.image}
      />
      <div className="overlay" />
      <div className="hero-title">{props.title}</div>
    </>
  );
}

export default Hero
