import React from "react"
import Img from "gatsby-image"
import { Row, Container } from "react-bootstrap"

class Content extends React.Component {
  render(){
    console.log("Class: ", this.props.class);
    const containerClass = `content ${this.props.class}`;
    return(
      <Row>
        <Container className={containerClass} fluid="true">
          <div className="text">
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
          </div>
          <Img
            title={this.props.imageTitle}
            alt={this.props.imageAlt}
            fluid={this.props.imageFluid}
          />
        </Container>
      </Row>
    );
  }
}

export default Content
