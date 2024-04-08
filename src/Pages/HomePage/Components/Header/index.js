import React, { useState } from "react";

import "./styles.css";
import Modal from "../../Common/Modal";
import AuthService from '../Auth';

function Header() {
  const [isOpen, setModal] = useState(false);

  const handleModalChange = () => {
    setModal(!isOpen);
  };
  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <div className="zoutons">Zoutons</div>
          <div className="loginHeader">
            <div className="login" onClick={handleModalChange}>
              Login
            </div>
            <div className="india">India</div>
          </div>
        </div>
      </header>
      {isOpen && (
        <Modal
          title="Modal Title"
          subtitle="Subtitle here"
          onClose={handleModalChange}
          isClose={true}
        >
          <AuthService />
        </Modal>
      )}
    </>
  );
}

export default Header;
