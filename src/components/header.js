import React from "react"
import FontAwesome from "react-fontawesome"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuActive: false,
    }

    this.menuClicked = this.menuClicked.bind(this)
  }
  menuClicked() {
    console.log("Menu has been clicked")
    const active = this.state.menuActive

    this.setState({
      menuActive: !active,
    })
  }
  render() {
    let active = this.state.menuActive
    let activeClass = active ? "links active" : "links inactive"

    return (
      <nav className="header-nav">
        <div className="header-name-links">
          <div className="name">
            <a href="/">Wesley Bosman</a>
          </div>
          <div className="menu-links">
            <div className={activeClass}>
              <a href="/">Home</a>
              <a href="/gallery">Gallery</a>
              <a href="/about">About</a>
              <a href="https://github.com/WesBosman" className="icon-link">
                <FontAwesome name="github" size="2x" />
              </a>
            </div>
            <div className="menu" onClick={this.menuClicked}>
              <FontAwesome name="bars" size="2x" />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
