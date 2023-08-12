"use client"; 
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { useState } from 'react';
const AddTask = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmitNewToDo = (e) => {
        e.preventDefault();
    }
    
    
    return (<div>
        <button onClick={() => { setShowModal(true) }} className="btn btn-primary w-full">
            Add new Task
            <AiOutlinePlus className="ml-2" size={18} />
        </button>

        <Modal modalOpen={showModal} setShowModal={setShowModal}>
            <form onSubmit={handleSubmitNewToDo}>
                <h3 className='font-bold text-lg'>Add new task</h3>
                <div className='modal-action'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </Modal>
    </div>); 
}

export default AddTask; 