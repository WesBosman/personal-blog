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
    <Container className="content" fluid="true">
      <div className="text">
        <h1>About Me</h1>
        <p>
          My name is Wesley Bosman and I am a professional Web Developer. When I
          am not writing code I spend time surfing, snowboarding, drinking craft
          beer and creating art.
        </p>
      </div>
      <Avatar />
    </Container>
    <Footer />
  </Layout>
)
