// src/components/Modal.jsx
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './styles/Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose} className="modal-close-button">Cerrar</button>
      </div>
    </div>,
    document.body
  );
};

// Definiendo PropTypes para asegurar la validación de los tipos de las props
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
