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
    <div className="modalOverlay" onClick={onClose}>
      <div
        className="modalContent"
        onClick={(event) => event.stopPropagation()}>
        {/* modal content */}
        {children}
        {/* end modal content */}
      </div>
    </div>
    /* end overlay */
  );
}
