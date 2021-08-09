import React from "react";
import background from "./cover/background-Image.jpg";

function Background() {
    return (
        <div style={{ backgroundImage: `url(${background})` }}></div>
    );
}

export default Background;