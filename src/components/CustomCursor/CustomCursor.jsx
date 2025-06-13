import { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const clickCursor = () => {
      cursor.classList.add("cursor-click");
      setTimeout(() => {
        cursor.classList.remove("cursor-click");
      }, 150);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", clickCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", clickCursor);
    };
  }, []);

  return <div className="custom-cursor" />;
};

export default CustomCursor;
