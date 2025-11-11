import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dim background
    zIndex: 1000, // Ensure modal appears above everything
    backdropFilter: 'blur(4px)', // Slight blur effect
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxHeight: '600px',
    overflowY: 'auto',
    border: 'none',
    borderRadius: '12px',
    padding: '1px 1px',
    background: 'rgba(0, 0, 0, 0.6)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
    zIndex: 1001, // above overlay
  },
};

const ModalBox = ({afterOpenModal,closeModal,modalIsOpen,trailerId}) => {

 const opts = {
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
   const _onReady = (event) => {
    event.target.playVideo; // optional: pause when ready
  };

 
  return (
    <div>
  
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      
        <YouTube videoId={trailerId} opts={opts} onReady={_onReady} />
      </Modal>
      
    </div>
  );
  
}

export default ModalBox