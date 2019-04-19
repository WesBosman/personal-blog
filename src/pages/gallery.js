import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Img from "gatsby-image"
import Slider from "react-slick"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"

export default function({ data }) {
  const galleryPhotos = data.galleryPhotos.edges
  const settings = {
    customPaging: function(index) {
      let img = galleryPhotos[index]
      return (
        <a href="#">
          <Img key={index} sizes={img.node.childImageSharp.sizes} />
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }
  return (
    <Layout>
      <Header />
      <Hero title="Gallery" />
      <Container className="gallery" fluid={true}>
        <Slider {...settings}>
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
        </Slider>
      </Container>
      <Footer />
    </Layout>
  )
}

export const galleryQuery = graphql`
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
            sizes(maxWidth: 300) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
