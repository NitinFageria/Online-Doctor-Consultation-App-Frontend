import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css'

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  customStyles,
  contentLabel,
  children
}) => {
  // Custom styles for the modal
  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)' // semi-transparent black background
    },
    content: {
      maxWidth: '40%', // Adjust the width as desired
      maxHeight: '60%', // Adjust the height as desired
      margin: 'auto', // Center the modal horizontally
      overflow: 'auto', // Enable scrolling if content exceeds the modal size
      padding: '0'
    }
  };

  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        style={{ ...modalStyles, ...customStyles }} // Merge custom styles with modal styles
        contentLabel={contentLabel}
      >
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;
