import React from "react"
import FontAwesome from "react-fontawesome"

const MenuIcon = (props) => {
  let active = props.active
  let bars = <FontAwesome style={props.style} name="bars" size="2x" />
  let close = <FontAwesome style={props.style} name="times" size="2x" />
  let icon = active ? close : bars

  return icon
};

export default MenuIcon;
