import React from "react"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import { Container } from "react-bootstrap"

export default function({ data }) {
  console.log("Data: ", data)
  return (
    <Layout>
      <Header />
      <Hero />
      <Container className="content" fluid="true">
        <div className="text">
          <h1>About Me</h1>
          <p>
            My name is Wesley Bosman and I am a professional Web Developer. When
            I am not writing code I spend time creating art.
          </p>
        </div>
        <Avatar />
      </Container>
      <Footer />
    </Layout>
  )
}

// export const titleQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

// export const imgQuery = graphql`
//   query {
//     profileImg: file(relativePath: { eq: "profile.JPG" }) {
//       childImageSharp {
//         fixed(width: 200, height: 200) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
