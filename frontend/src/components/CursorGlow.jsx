import { useEffect, useRef } from "react";

const isDesktopHover = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;
};

export const CursorGlow = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    if (!isDesktopHover()) return;
    enabledRef.current = true;
    if (glowRef.current) glowRef.current.style.display = "block";
    if (dotRef.current) dotRef.current.style.display = "block";

    let glowX = window.innerWidth / 2;
    let glowY = window.innerHeight / 2;
    let targetX = glowX;
    let targetY = glowY;
    let raf;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      glowX += (targetX - glowX) * 0.08;
      glowY += (targetY - glowY) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" data-testid="cursor-glow" style={{ display: "none" }} />
      <div ref={dotRef} className="cursor-dot" data-testid="cursor-dot" style={{ display: "none" }} />
    </>
  );
};

export default CursorGlow;
