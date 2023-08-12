import React from "react";

interface ModalProps {
    modalOpen: boolean;
    setShowModal: (x: boolean) => void; 
    children : React.ReactNode;
}

const Modal:React.FC<ModalProps> = ({modalOpen, setShowModal, children}) => {
    return (<> 
        <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <form method="dialog" className="modal-box">
            <button 
                onClick={() => { setShowModal(false) }}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
            </button>
            
            {children}
        </form>
        </dialog>
    
    </>);

}

export default Modal;