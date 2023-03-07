import React from "react";
import ReactModal from "react-modal";

const ModalContainer = ({
  isVisible,
  setVisible,
  width = "50vw",
  shouldCloseOnOverlayClick = true,
  modalTitle = "기업정보",
  children,
}) => {
  return (
    <ReactModal
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={() => setVisible(false)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1000,
        },
        content: {
          backgroundColor: "white",
          width: width,
          height: "auto",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          top: 40,
          left: 0,
          right: 0,
          bottom: 40,
          padding: 0,
          overflow: "hidden",
        },
      }}
      isOpen={isVisible}
    >
      <div className="absolute w-full h-12 bg-zinc-100 flex border-b px-8 items-center justify-between z-20">
        <p className="font-bold font-nanum">{modalTitle}</p>
        <button
          onClick={() => setVisible(false)}
          className="font-bold text-blue-500 text-sm font-nanum"
        >
          닫기
        </button>
      </div>
      <div className="overflow-y-auto relative w-full h-full pt-12 pb-8 flex-shrink-0">
        {children}
      </div>
    </ReactModal>
  );
};

export default ModalContainer;
