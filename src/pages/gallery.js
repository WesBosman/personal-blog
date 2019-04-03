import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"
import { StaticQuery, graphql } from "gatsby"

class Gallery extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            galleryPhotos: allFile(
              filter: {
                extension: { regex: "/(jpeg|jpg|gif|png|JPG)/" }
                relativeDirectory: { eq: "gallery" }
              }
            ) {
              edges {
                node {
                  childImageSharp {
                    sizes(maxWidth: 380) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        `}
        render={function(data) {
          //   console.log("Data: ", data)
          return (
            <Layout>
              <Header />
              <Hero />
              <Container className="gallery" fluid={true}>
                {data.galleryPhotos.edges.map(function(element, index) {
                  return (
                    <Img
                      className="gallery-item"
                      title="title"
                      alt="alt"
                      key={index}
                      sizes={element.node.childImageSharp.sizes}
                    />
                  )
                })}
              </Container>
              <Footer />
            </Layout>
          )
        }}
      />
    )
  }
}

export default Gallery
