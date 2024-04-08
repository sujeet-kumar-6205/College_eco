import React from 'react';
import './index.css';

const Modal = ({ onClose, isClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {isClose && <div onClick={onClose} className='cross-icon'>X</div>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
