import React from "react"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

const Content = (props) =>  {
  const containerClass = `content ${props.class}`;
  const slideDirection = props.class === "content-row" ? "slide-right" : "slide-left";
  
  return (
    <Container className={containerClass} fluid="true">
      <div 
        className="text"
        data-sal={slideDirection}
        data-sal-duration="300"
        data-sal-easing="ease-in-out"
      >
        <h2>
          {props.title}
        </h2>
          {props.children}
      </div>
      <div className="gutter-20" />
      <Img
        title={props.imageTitle}
        alt={props.imageAlt}
        fluid={props.imageFluid}
        style={{
          borderRadius: "10px"
        }}
      />
    </Container>
  );
};

export default Content
