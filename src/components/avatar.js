import React, { Component } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

class Avatar extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            profileImg: file(relativePath: { eq: "avatar.jpg" }) {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            className="avatar"
            title="Avatar"
            alt="Wes Bosman Avatar"
            fixed={data.profileImg.childImageSharp.fixed}
          />
        )}
      />
    )
  }
}

export default Avatar
