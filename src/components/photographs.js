import React from "react";
import Img from "gatsby-image";

const Photographs = (props) => {
    return (
        <div className="max-width margin-auto photographs-div">
            <h2>Photographs</h2>
            <hr/>
            <div className="photographs">
                {props.data.map((element, index) => {
                    return (
                    <div key={index} className="photo-item-div">
                        <Img
                            className="photo-item"
                            title="title"
                            alt="alt"
                            key={index}
                            sizes={element.node.childImageSharp.sizes}
                        />
                    </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Photographs;