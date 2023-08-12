import React, { useEffect, useState } from "react";

interface ModalProps {
    modalOpen: boolean;
    setShowModal: (x: boolean) => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setShowModal, children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Return nothing on the server
    }

    return (
        <>
            {modalOpen && (
                <dialog id="my_modal_3" className={`modal modal-open`}>
                    <form method="dialog" className="modal-box">
                        <button
                            onClick={() => { setShowModal(false) }}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>

                        {children}
                    </form>
                </dialog>
            )}
        </>
    );
};

export default Modal;
