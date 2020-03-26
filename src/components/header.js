import React, { Component } from "react"
import FontAwesome from "react-fontawesome"
import MenuIcon from "./menu-icon"
import { Motion, spring } from "react-motion"
import TransitionLink from "gatsby-plugin-transition-link"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuActive: false,
      linksClass: "links none",
      overlayClass: "app-overlay none",
    }

    this.menuClicked = this.menuClicked.bind(this)
  }
  menuClicked() {
    const active = this.state.menuActive

    this.setState({
      menuActive: !active,
      linksClass: `links ${!active ? "active" : "inactive"}`,
      overlayClass: `app-overlay ${!active ? "active" : "inactive"}`,
    })
  }
  render() {
    let active = this.state.menuActive

    return (
      <>
        <nav className="header-nav">
          <div className="header-name-links">
            <div className="name">
              <TransitionLink to={"/"}>Wesley Bosman</TransitionLink>
            </div>
            <div className="menu-links">
              <div className={this.state.linksClass}>
                <TransitionLink to={"/"}>Home</TransitionLink>
                <TransitionLink to={"/gallery"}>Gallery</TransitionLink>
                <TransitionLink to={"/about"}>About</TransitionLink>
                <a href={"https://github.com/WesBosman"} className="icon-link">
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
        <div className={this.state.overlayClass} />
      </>
    )
  }
}

export default Header
