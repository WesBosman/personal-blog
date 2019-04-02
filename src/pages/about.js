import React from "react"
import { Row, Container } from "react-bootstrap"
import Header from "../components/header"

export default () => (
  <Row>
    <Container fluid="true">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <Header />
      <p>This is the about me section.</p>
    </Container>
  </Row>
)
