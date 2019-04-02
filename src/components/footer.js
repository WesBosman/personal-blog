import React from "react"

class Footer extends React.Component {
  render() {
    const date = new Date()
    console.log("Date: ", date)
    return <footer>Copyright© Wesley Bosman {date.getFullYear()}.</footer>
  }
}

export default Footer
