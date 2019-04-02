import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Image = function({ data }) {
  console.log("Props: ", props)
  console.log("Data: ", data)
  return (
    <StaticQuery
      query={fluidImage}
      render={data => (
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
      )}
    />
  )
}

export default Image

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "richmond.JPG" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "two.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "three.jpg" }) {
      ...fluidImage
    }
  }
`
