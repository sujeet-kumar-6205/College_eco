import React from "react";
import { list } from "./constants";

function PartnersList() {
  const renderPartners = ({ id, url }) => {
    return (
      <div key={id} className="eachPartner">
        <img
          className="partner_image"
          width="100%"
          src={url}
          alt={`partner_${id}`}
        />
      </div>
    );
  };
  return <div className="grid">{list.map(renderPartners)}</div>;
}

export default PartnersList;
