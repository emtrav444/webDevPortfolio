/* IMPORTS */
import "./ModalOverlay.css";
import type { ReactNode } from "react";

type ModalOverlayProps = {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function ModalOverlay({
  opened,
  onClose,
  children,
}: ModalOverlayProps) {
  if (!opened) {
    return null;
  }

  return (
    /* modal overlay */
    <div className="modalOverlay">
      <div className="modalContent">
        {/* modal content */}
        {children}
        {/* end modal content */}
        {/* modal buttons */}
        <button className="modalCancelBtn" type="button" onClick={onClose}>
          cancel
        </button>
        {/* end modal buttons */}
      </div>
    </div>
    /* end overlay */
  );
}
