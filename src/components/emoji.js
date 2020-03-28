import React from "react";

const Emoji = (props) => {
    return (
        <span role="img" aria-label={props.label}>
            {props.children}
        </span>
    );
}

export default Emoji;