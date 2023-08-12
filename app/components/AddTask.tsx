"use client"; 
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from "next/navigation";
import { v4 } from 'uuid';
// ... (import statements)

const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('');

    const handleSubmitNewToDo: FormEventHandler<HTMLFormElement> = async (e) => {
        console.log("tes"); 
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const newTask = await addTodo({
                id: v4,
                text: newTaskValue,
            });
            console.log("New task added:", newTask);
        } catch (error) {
            console.error("Error adding task:", error);
        }

        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }

    return (
        <div>
            <button onClick={() => { setModalOpen(true) }} className="btn btn-primary w-full">
                Add new Task
                <AiOutlinePlus className="ml-2" size={18} />
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewToDo}>
                <h3 className='font-bold text-lg'>Add new task</h3>
                <div className='modal-action'>
                    <input
                    value={newTaskValue}
                    onChange={(e) => setNewTaskValue(e.target.value)}
                    type='text'
                    placeholder='Type here'
                    className='input input-bordered w-full'
                    />
                    <button type='submit' className='btn'>
                    Submit
                    </button>
                </div>
                </form>
            </Modal>
        </div>
    );
}

export default AddTask;
