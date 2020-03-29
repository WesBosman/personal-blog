import React from "react"
import { Helmet } from "react-helmet"
import "../styles/font-awesome.min.css"
import "../sass/app.scss"

export default ({ children }) => (
  <div id="app">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Wes Bosman | Home</title>
      <link rel="canonical" href="http://wesleybosman.com" />
      <meta name="description" content="a personal blog for code and art" />
    </Helmet>
    <div>{children}</div>
  </div>
);
