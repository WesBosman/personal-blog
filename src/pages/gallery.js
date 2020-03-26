import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"

export default function({ data }) {
  const galleryPhotos = data.galleryPhotos.edges;
  
  return (
    <Layout>
      <Header />
      <Hero title="Gallery" />
      <Container className="gallery" fluid={true}>
        {galleryPhotos.map(function(element, index) {
          return (
            <div key={index} className="gallery-item-div">
              <Img
                className="gallery-item"
                title="title"
                alt="alt"
                key={index}
                sizes={element.node.childImageSharp.sizes}
              />
            </div>
          )
        })}
      </Container>
      <Footer />
    </Layout>
  )
}

export const galleryQuery = graphql`
  query {
    galleryPhotos: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "gallery" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 300) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;