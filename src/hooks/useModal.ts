import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook to manage modal visibility and closing behavior.
 * @param initialOpen - The initial open state of the modal.
 * @returns An object containing the modal state, a function to update it, and a ref for the modal content.
 */
export const useModal = (initialOpen = false) => {
  const [modalOpen, setModalOpen] = useState(initialOpen);
  const modalContent = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!modalOpen || modalContent.current?.contains(target as Node)) return;
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [modalOpen]);

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [modalOpen]);

  return {
    modalOpen,
    setModalOpen,
    modalContent,
  };
};
