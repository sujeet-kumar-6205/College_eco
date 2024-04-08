import React from "react";
import { NAVCONTENT } from "./constants";
import "./styles.css";

function Nav() {
  const renderEachNav = ({ title, id, link }) => <div key={id}>{title}</div>;

  const renderNavContent = () => NAVCONTENT.map(renderEachNav);
  return <div className="navbar">{renderNavContent()}</div>;
}

export default Nav;
