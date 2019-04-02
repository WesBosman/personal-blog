import React from "react"
import Header from "../components/header"
import Avatar from "../components/avatar"
import Content from "../components/content"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Row, Container } from "react-bootstrap"
import "../styles/font-awesome.min.css"
import "../sass/app.scss"

export default function({ data }) {
  console.log("Data: ", data)
  return (
    <Row>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wes Bosman | Home</title>
        <link rel="canonical" href="http://wesleybosman.com" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Rock+Salt"
          rel="stylesheet"
        />
      </Helmet>
      <Container fluid="true">
        <Header />
        <Img
          className="hero"
          title="Richmond"
          alt="Richmond Skyline"
          fluid={data.headerImg.childImageSharp.fluid}
        />
        <Container className="content" fluid="true">
          <div className="text">
            <h1>About Me</h1>
            <p>
              My name is Wesley Bosman and I am a professional Web Developer.
              When I am not writing code I spend time creating art.
            </p>
          </div>
          <Img
            className="avatar"
            title="profile"
            alt="profile image"
            fixed={data.profileImg.childImageSharp.fixed}
          />
        </Container>
        <Footer />
      </Container>
    </Row>
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

export const imgQuery = graphql`
  query {
    headerImg: file(relativePath: { eq: "richmond.JPG" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profileImg: file(relativePath: { eq: "profile.JPG" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
