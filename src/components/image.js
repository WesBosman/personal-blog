import React from "react"
import Img from "gatsby-image"

const Image = ({ data }) => {
  return (   
    <Img
      title={props.title}
      fluid={data.imageOne.childImageSharp.fluid}
      alt={props.alt}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
      }}
    /> 
  );
};

export default Image;