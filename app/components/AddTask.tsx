"use client"; 
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { useState } from 'react';
const AddTask = () => {
    const [showModal, setShowModal] = useState(false);
    return (<div>
        <button onClick={() => { setShowModal(true) }} className="btn btn-primary w-full">
            Add new Task
            <AiOutlinePlus className="ml-2" size={18} />
        </button>

        <Modal modalOpen={showModal} setShowModal={setShowModal}>
            Modal for add todo
        </Modal>
    </div>); 
}

export default AddTask; 