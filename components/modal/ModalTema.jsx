import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";

export const ModalTema = ({ showModal, setShowModal }) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
    })

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])
  return (
    <>
      {showModal ? (
        <div ref={modalRef} onClick={closeModal} className="flex inset-0 absolute justify-center items-center p-8 bg-yellow-300 bg-transparent min-h-screen - min-w-full">
            <animated.div style={animation}>
          <div
            showModal={showModal}
            className="bg-red-600 w-96 h-96 flex justify-center items-center"
          >
            Modal conent
          </div>
          <div
            className="absolute font-bold text-3xl cursor-pointer"
            aria-label="Close Modal"
            onClick={() => setShowModal((prev) => !prev)}
          >
            X
          </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
