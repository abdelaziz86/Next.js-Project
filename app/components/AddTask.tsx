import {AiOutlinePlus} from 'react-icons/ai';
import Modal from './Modal';
const AddTask = () => {
    return <div>
        <button className="btn btn-primary w-full">
            Add new Task
            <AiOutlinePlus className="ml-2" size={18} />
        </button>
        
        <Modal />
    </div>
}

export default AddTask; 