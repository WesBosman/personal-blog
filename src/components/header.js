import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import FontAwesome from "react-fontawesome"

class Header extends React.Component {
  render() {
    return (
      <nav className="header-nav">
        <div className="header-name-links">
          <div className="name">Wesley Bosman</div>
          <div className="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="https://github.com/WesBosman">
              <FontAwesome name="github" size="2x" />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
