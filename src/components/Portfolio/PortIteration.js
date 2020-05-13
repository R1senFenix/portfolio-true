import React from "react";

const PortIteration = ({ portList }) => {
    var folioList = [];
    if (portList) {
        folioList = portList.map(folio => {


            return <div class="card col-md-4">
                <div class="card-body">
                    <a href={folio.hyperlink}>
                        <img
                            class="portImg justify-content-center"
                            src={folio.image}
                            alt="missing"
                        />
                        <h5 class="card-title">{folio.title}</h5>
                        <p class="card-text">{folio.text}</p>
                    </a>
                    <p class="card-text">
                        <a href={folio.githubRepo}>GitHub Repository</a>
                    </p>
                </div>
            </div>
        })
    };

    return (
        <div class="d-inline-flex conBorder row">
            {folioList}
        </div>
    );
};

export default PortIteration;