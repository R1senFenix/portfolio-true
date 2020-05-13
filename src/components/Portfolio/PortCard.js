import React from "react";

const PortCard = ({ portList }) => {
    var folioList = [];
    if (portList) {
        folioList = portList.map(folio => (
            <PortCard
                id={folio.id}
                title={folio.title}
                hyperlink={folio.hyperlink}
                githubRepo={folio.githubRepo}
                image={folio.image}
                text={folio.text}

            />
        ));
    }
    return (
        <div>
            {folioList}
        </div>
    );
};


export default PortCard;