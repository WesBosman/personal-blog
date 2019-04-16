import React from "react"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

class Content extends React.Component {
  render() {
    const containerClass = `content ${this.props.class}`
    return (
      <Container className={containerClass} fluid="true">
        <div className="text">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="gutter-20" />
        <Img
          title={this.props.imageTitle}
          alt={this.props.imageAlt}
          fluid={this.props.imageFluid}
        />
      </Container>
    )
  }
}

export default Content
