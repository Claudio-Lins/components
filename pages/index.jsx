import React, {useState} from 'react';
import { ModalTema } from '../components/modal/ModalTema';
import Post from "../components/Post";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const opneModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
      <div className='relative'>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">
          Components <span className="text-blue-600">Tailwind CSS</span>
        </h1>
      </div>

      {/*  */}
      <div className="justify-center border-2 mt-4 w-auto mx-auto px-8 py-4">
        <Post />
      </div>
      {/*  */}
      <div className="text-center border-2 mt-4 py-8">
        <button onClick={opneModal} className="bg-blue-600 px-4 py-2 rounded-md shadow-sm">Modal</button>
        <ModalTema showModal={showModal} setShowModal={setShowModal} />
      </div>
      </div>
    </>
  );
}
