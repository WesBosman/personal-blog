import React from "react"

class Footer extends React.Component {
  render() {
    const date = new Date()
    return <footer>Copyright© Wesley Bosman {date.getFullYear()}.</footer>
  }
}

export default Footer
