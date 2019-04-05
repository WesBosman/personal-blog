import React from "react"
import { Row, Container } from "react-bootstrap"
import { Helmet } from "react-helmet"
import "../styles/font-awesome.min.css"
import "../sass/app.scss"

export default ({ children }) => (
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
    <Container className="app" fluid="true">
      {children}
    </Container>
  </Row>
)
