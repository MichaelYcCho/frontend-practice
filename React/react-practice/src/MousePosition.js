import { useEffect, useState } from "react";

const MousePosition = () => {
  const [mousePointer, setMousePointer] = useState({ x: null, y: null });
  const move = event => {
    const { x, y } = event;
    setMousePointer({ x, y });
  };
  useEffect(() => {
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return mousePointer;
}


export default MousePosition;