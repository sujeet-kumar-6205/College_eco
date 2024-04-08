import React from "react";
import "./styles.css";
import PartnersList from "./PartnersList";

function Partners() {
  return (
    <div className="partnersContainer">
      <div className="partnersHeadingCont">
        <div className="feature">FEATURED STORIES</div>
        <span>
          <a className="viewStory" href="/stores" title="All Stores">
            View All Stores
          </a>
        </span>
      </div>
      <PartnersList />
    </div>
  );
}

export default Partners;
