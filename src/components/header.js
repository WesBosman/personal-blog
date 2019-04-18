import React from "react"
import FontAwesome from "react-fontawesome"
import MenuIcon from "./menuicon"
import { Motion, spring } from "react-motion"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuActive: false,
    }

    this.menuClicked = this.menuClicked.bind(this)
  }
  menuClicked() {
    const active = this.state.menuActive

    this.setState({
      menuActive: !active,
    })
  }
  render() {
    let active = this.state.menuActive
    let activeClass = active ? "links active" : "links inactive"
    let animateMenuOut = active ? 0 : 200
    let animateMenuIn = active ? 200 : 0

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
              <Motion
                defaultStyle={{
                  opacity: 0.75,
                  rotate: 0,
                }}
                style={{
                  opacity: spring(active ? 0.75 : 1.0),
                  rotate: spring(active ? 90 : 0),
                }}
              >
                {style => (
                  <MenuIcon
                    style={{
                      opacity: style.opacity,
                      transform: `rotate(${style.rotate}deg)`,
                    }}
                    active={active}
                  />
                )}
              </Motion>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
