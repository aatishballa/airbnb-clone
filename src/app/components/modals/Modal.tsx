'use client'


import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";


interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel

}) => {
  const [showModel, setshowModel] = useState(isOpen)

  useEffect(() => {
    setshowModel(isOpen)
  }, [isOpen])

  return (
    <div>Modal</div>
  )
}
export default Modal