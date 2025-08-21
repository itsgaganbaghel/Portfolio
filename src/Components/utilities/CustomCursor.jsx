import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const update = () => {
      const { x, y } = posRef.current;

      // Move the custom cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Detect hovered element
      const hoveredEl = document.elementFromPoint(x, y);

      if (hoveredEl) {
        // If hovering on an <a> tag or its child
        const isLink = hoveredEl.closest("a"); // allows nested elements inside <a>

        if (cursorRef.current) {
          cursorRef.current.style.display = isLink ? "none" : "block";
        }
      }

      if (hoveredEl) {
        // If hovering on an <a> tag or its child
        const isLink =
          hoveredEl.closest("p") ||
          hoveredEl.closest("h1") ||
          hoveredEl.closest("h2") ||
          hoveredEl.closest("h3") ||
          hoveredEl.closest("li") ||
          hoveredEl.closest("span");

        if (cursorRef.current) {
          cursorRef.current.style.background = isLink ? "white" : "transparent";
          cursorRef.current.style.border = isLink ? "none" : "2px solid white";
          cursorRef.current.style.width = isLink ? "35px" : "20px";
          cursorRef.current.style.height = isLink ? "35px" : "20px";
        }
      }

      frameRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", moveCursor);
    frameRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0   w-5 h-5  rounded-full  mix-blend-difference pointer-events-none z-[99]"
      style={{
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
