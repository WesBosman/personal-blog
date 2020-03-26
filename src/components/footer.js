import React, { Component } from "react"

class Footer extends Component {
  render() {
    const date = new Date();

    return (
      <footer>
        Copyright © Wesley Bosman {date.getFullYear()}.
      </footer>
    );
  }
}

export default Footer
