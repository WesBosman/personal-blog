import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/hero"
import Avatar from "../components/avatar"
import Footer from "../components/footer"
import { Container } from "react-bootstrap"

export default () => (
  <Layout>
    <Header />
    <Hero title="About" />
    <Container className="content about-me" fluid="true">
      <div className="text">
        <h1>Me</h1>
        {/* <div class="typewriter">
          <h1>I am Wesley Bosman.</h1>
        </div> */}
        <p>
          I am Wesley Bosman. I'm a professional Web Developer. A Python
          enthusiast. A Surfer, Skateboarder and Snowboarder. I enjoy drinking
          beer and being outdoors.
          <br />
          Feel free to email me <br />
          <a
            style={{ color: "rgba(41, 41, 41, 0.75)" }}
            href="mailto:bosmanwn@vcu.edu"
          >
            bosmanwn[at]vcu[dot]edu
          </a>
        </p>
        <br />
        <h2>The Tech</h2>
        <p>
          This site was built using Gatsby as an expirment with React and
          GraphQl. At work I write internal Web Apps using Laravel and PHP. When
          working on our external website I use Wordpress. If we need a quick
          script I usually turn to python. In my spare time I experiment with
          mobile development using iOS or React Native.
        </p>
      </div>
      <Avatar />
    </Container>
    <Footer />
  </Layout>
)
