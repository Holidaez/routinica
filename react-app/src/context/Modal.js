import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children, cssClass}) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;
  const className = `modal-content ${cssClass}`
  return ReactDOM.createPortal(
    <div className="modal" >
      <div className="modal-background" onClick={onClose} />
      <div className={className} >
        <button className="close" onClick={onClose}>x</button>
        {children}
      </div>
    </div>,
    modalNode
  );
}
