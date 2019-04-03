import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

class Hero extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            headerImg: file(relativePath: { eq: "richmond.JPG" }) {
              childImageSharp {
                fluid(maxWidth: 1250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            className="hero"
            title="Richmond"
            alt="Richmond Skyline"
            fluid={data.headerImg.childImageSharp.fluid}
          />
        )}
      />
    )
  }
}

export default Hero
