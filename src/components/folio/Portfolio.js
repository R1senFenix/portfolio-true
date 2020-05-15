import React from "react";
import PortIteration from "./PortIteration"
import portList from "./portList"

function Portfolio() {


    return (
        <div class="container-sm content">
            <div class="row">
                <h2>Portfolio</h2>
            </div>
            <div >
                <PortIteration portList={portList} />
            </div>
        </div>

    );
}

export default Portfolio;