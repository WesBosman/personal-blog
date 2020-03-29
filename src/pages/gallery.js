import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function({ data }) {
  const acrylic     = data.acrylic.edges;
  const charcoal    = data.charcoal.edges;
  const other       = data.other.edges;
  const pen         = data.pen.edges;
  const stencils    = data.stencils.edges;
  const watercolor  = data.watercolor.edges;
  
  const galleryMap = (array) => {
    return array.map((element, index) => {
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
    });
  };

  return (
    <Layout>
      <Header />
      <Hero title="Gallery" />
      <div id="gallery-links" className="max-width margin-auto gallery-links flex justify-space-around">
        <AnchorLink to="/gallery#acrylic" title="Acrylic Paintings">
          Acrylic
        </AnchorLink>
        <AnchorLink to="/gallery#charcoal" title="Charcoal Drawings">
          Charcoal
        </AnchorLink>
        <AnchorLink to="/gallery#other" title="Other Works">
          Other
        </AnchorLink>
        <AnchorLink to="/gallery#pen" title="Pen Drawings">
          Pen
        </AnchorLink>
        <AnchorLink to="/gallery#stencils" title="Stencils and Stickers">
          Stencil & Stickers
        </AnchorLink>
        <AnchorLink to="/gallery#watercolor" title="Watercolor Paintings">
          Watercolor
        </AnchorLink>
      </div>
      <div id="gallery-div" className="max-width gallery-div margin-auto flex column">
        <div>
          <h2 id="acrylic">
            Acrylic
          </h2>
          <div className="gallery">
            {galleryMap(acrylic)}
          </div>
        </div>

        <div>
          <h2 id="charcoal">
            Charcoal
          </h2>
          <div className="gallery">
            {galleryMap(charcoal)}
          </div>
        </div>

        <div>
          <h2 id="other">
            Other
          </h2>
          <div className="gallery">
            {galleryMap(other)}
          </div>
        </div>

        <div>
          <h2 id="pen">
            Pen
          </h2>
          <div className="gallery">
            {galleryMap(pen)}
          </div>
        </div>

        <div>
          <h2 id="stencils">
            Stencils and Stickers
          </h2>
          <div className="gallery">
            {galleryMap(stencils)}
          </div>
        </div>

        <div>
          <h2 id="watercolor">
            Watercolor
          </h2>
          <div className="gallery">
            {galleryMap(watercolor)}
          </div>
        </div>
      </div>      
      <Footer />
    </Layout>
  )
}

export const galleryQuery = graphql`
  query {
    acrylic: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "acrylic" }
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
    },
    charcoal: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "charcoal" }
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
    },
    other: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "others" }
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
    },
    pen: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "pen" }
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
    },
    stencils: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "stencils" }
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
    },
    watercolor: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "watercolor" }
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