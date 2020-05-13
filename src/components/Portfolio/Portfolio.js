import React from "react";
import PortCard from "./PortCard"
import portList from "./portList";

function Portfolio() {
    return (
        <div class="container-sm content">
            <div class="row">
                <h2>Portfolio</h2>
            </div>
            <div class="d-inline-flex conBorder row">
                <PortCard portList={portList} />
            </div>
        </div>

    );
}

export default Portfolio;