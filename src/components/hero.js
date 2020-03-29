import React, { Component } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

class Hero extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            headerImg: file(relativePath: { eq: "richmond.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Img
              className="hero"
              title="Richmond"
              alt="Richmond Skyline"
              fluid={data.headerImg.childImageSharp.fluid}
            />
            <div className="overlay" />
            <div className="hero-title">{this.props.title}</div>
          </>
        )}
      />
    )
  }
}

export default Hero
