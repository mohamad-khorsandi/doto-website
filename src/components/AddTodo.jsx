import './AddTodo.css'
import { Plus } from 'lucide-react';
import Modal from 'react-modal';

function AddBtn () {
  return (
    <button className="add-btn">
      <Plus className='plus-icon'/>
    </button>
  )
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function AddWindows () {
  return (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      </Modal>
  )
}

export default AddBtn