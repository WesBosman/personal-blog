import React from "react";
import FontAwesome from "react-fontawesome"
import Avatar from "../components/avatar"
import Emoji from "../components/emoji"
import colors from "../constants/colors"

const About = () => {
    return (
        <div className="background-dark about-me">
            <Avatar className="p-1"/>
            <div className="flex column">
              <h1 className="color-light" style={{
                borderBottom: `1px solid ${colors.lightAccent}`
              }}>
                Wesley Bosman
              </h1>
              <p className="color-light">
                I'm a Full Stack Web / Mobile Developer.
                A surfer, skateboarder and snowboarder.<br/>
                I enjoy drinking beer and being outdoors.
              </p>
              <p>
                <Emoji label="surfer">🏄 </Emoji>
                <Emoji label="snowboarder">🏂 </Emoji>
              </p>
              <div className="flex justify-space-around align-items-center">
                <a href="mail:to=bosmanwn@vcu.edu" className="about-link" name="email link">
                  bosmanwn[at]vcu[dot]edu
                </a>
                <a href={"https://github.com/WesBosman"} className="about-link" name="github link">
                  <FontAwesome name="github" size="2x" />
                </a>
              </div>
            </div>
        </div>
    );
}

export default About;