import React from "react"
import FontAwesome from "react-fontawesome"

class MenuIcon extends React.Component {
  render() {
    let active = this.props.active
    let bars = <FontAwesome style={this.props.style} name="bars" size="2x" />
    let close = <FontAwesome style={this.props.style} name="times" size="2x" />
    let icon = active ? close : bars

    return icon
  }
}

export default MenuIcon
