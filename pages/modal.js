import React, { useState } from "react";
import Image from "next/image";
import { ModalTema } from "../components/modal/ModalTema";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const opneModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div className="grid grid-cols-2 w-2/3 mx-auto">
        <div className="text-center mt-4 py-8">
          <button
            onClick={opneModal}
            className="bg-gray-100 px-4 py-2 rounded-md shadow-md"
          >
            <Image
              src="/temas/arca-de-noe/arca-imagem.png"
              width={100}
              height={100}
            />
          </button>
          <ModalTema showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div className="text-center mt-4 py-8">
          <button
            onClick={opneModal}
            className="bg-gray-100 px-4 py-2 rounded-md shadow-md"
          >
            <Image
              src="/temas/arca-de-noe/arca-imagem.png"
              width={100}
              height={100}
            />
          </button>
          <ModalTema showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
}
