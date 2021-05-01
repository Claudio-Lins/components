import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import ModalDestak from "../modal/ModalDestak";
import { MdClose } from "react-icons/md";

export const ModalTema = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-100%)",
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="flex inset-0 absolute justify-center items-center p-8 bg-black min-h-screen - min-w-full bg-opacity-90"
        >
          <animated.div style={animation}>
            <div
              showModal={showModal}
              className="flex justify-center items-center"
            >
              <ModalDestak />
            </div>
            <div
              className="absolute font-bold text-3xl cursor-pointer right-5 top-12 text-white"
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
