import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Content from "../components/content"
import Footer from "../components/footer"

export default function({ data }) {
  return (
    <Layout>
      <Header />
      <Hero title="" />
      <Content
        class="r"
        title="Introductions"
        text={`I'm Wes Bosman.\
        I'm a Web Developer from Virginia. The purpose of this website \
        is to display my art as well as blog about code that I write.`}
        imageTitle="In the surf"
        imageAlt="In the surf"
        imageFluid={data.inTheSurf.childImageSharp.fluid}
      />
      <Content
        class="r-reverse"
        title="Dog Friendly"
        text="This is my dog Sam. She is a great saltwater adventure companion."
        imageTitle="Sam"
        imageAlt="Sam"
        imageFluid={data.sam.childImageSharp.fluid}
      />
      <Footer />
    </Layout>
  )
}

export const imgQuery = graphql`
  query {
    inTheSurf: file(relativePath: { eq: "in-the-surf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beachBoard: file(relativePath: { eq: "beach-board.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
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
  }
`
