import React, {useState} from 'react';
import { ModalTema } from '../components/modal/ModalTema';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const opneModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
     
      {/*  */}
      <div className="text-center border-2 mt-4 py-8">
        <button onClick={opneModal} className="bg-blue-600 px-4 py-2 rounded-md shadow-sm">Modal</button>
        <ModalTema showModal={showModal} setShowModal={setShowModal} />
      </div>
      
    </>
  );
}
