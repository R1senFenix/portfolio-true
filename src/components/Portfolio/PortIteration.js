import React from "react";


const PortIteration = ({ portList }) => {
    var folioList = [];
    if (portList) {
        folioList = portList.map(folio => {


            return <div className="card col-md-4">
                <div className="card-body">
                    <a href={folio.hyperlink}>
                        <img
                            className="portImg justify-content-center"
                            src={folio.image}
                            alt="missing"
                        />
                        <h5 className="card-title">{folio.title}</h5>
                        <p className="card-text">{folio.text}</p>
                    </a>
                    <p className="card-text">
                        <a href={folio.githubRepo}>GitHub Repository</a>
                    </p>
                </div>
            </div>
        })
    };

    return (
        <div className="d-inline-flex conBorder row">
            {folioList}
        </div>
    );
};

export default PortIteration;