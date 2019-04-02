import React from "react"
import Colors from "../constants/colors"
import { Row, Container } from "react-bootstrap"

const contentStyle = {
  backgroundColor: Colors.lightGray,
  margin: "3rem auto",
  maxWidth: "960px",
  height: "100%",
}

export default () => (
  <Row>
    <Container style={contentStyle} fluid="true">
      <h1>This is a header</h1>
      <p>This is an example paragraph.</p>
    </Container>
  </Row>
)
