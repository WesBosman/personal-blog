import React from "react"

const Footer = () => {
  // Get the current date and use that to get the year for the footer
  const date = new Date();

  return (
    <footer>
      Copyright © Wesley Bosman {date.getFullYear()}.
    </footer>
  );
};

export default Footer
