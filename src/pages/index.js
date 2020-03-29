import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Content from "../components/content"
import About from "../components/about"
import Footer from "../components/footer"
import Photographs from "../components/photographs";

export default function({ data }) {
  return (
    <Layout>
      <Header />
      <Hero title="" image={data.headerImg.childImageSharp.fluid}/>
      <Content
        class="content-row"
        title="Introductions"
        imageTitle="In the surf"
        imageAlt="In the surf"
        imageFluid={data.inTheSurf.childImageSharp.fluid}
      >
        <p>
          I'm Wes Bosman.
          I'm a Web Developer from Virginia.
        </p>
        <p>
          The purpose of this website
          is to display my art as well as blog about code that I write.
        </p>
      </Content>
      <Content
        class="content-row-reverse"
        title="Dog Friendly"
        imageTitle="Sam"
        imageAlt="Sam"
        imageFluid={data.sam.childImageSharp.fluid}
      >
        <p>
          This is my dog Sam, always up for an adventure.
        </p>
      </Content>

      <Photographs data={data.photographs.edges}/>
      
      <About/>
      <Footer />
    </Layout>
  )
}

export const imgQuery = graphql`
  query {
    headerImg: file(relativePath: { eq: "richmond.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1250) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    inTheSurf: file(relativePath: { eq: "in-the-surf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachBoard: file(relativePath: { eq: "beach-board.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sam: file(relativePath: { eq: "sam.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mallards: file(relativePath: { eq: "mallards.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    photographs: allFile(
      filter: {
        extension: { regex: "/(jpe?g|gif|png)/" }
        relativeDirectory: { eq: "photographs" }
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