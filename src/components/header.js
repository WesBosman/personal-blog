import React from "react"
import FontAwesome from "react-fontawesome"

class Header extends React.Component {
  render() {
    return (
      <nav className="header-nav">
        <div className="header-name-links">
          <div className="name">
            <a href="/">Wesley Bosman</a>
          </div>
          <div className="links">
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
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
