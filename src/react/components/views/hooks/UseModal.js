import { useEffect, useState, useRef } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle,
    node,
  };
};

export default useModal;
