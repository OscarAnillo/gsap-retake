import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BasicTween() {
  const nameRef = useRef(null);
  const positionRef = useRef(null);

  useEffect(() => {
    gsap.from(".name", {
      opacity: 0,
      duration: 5,
      y: -600,
      fontSize: "9rem",
      ease: "elastic",
    });
    gsap.to(".name", {
      opacity: 1,
      duration: 5,
      fontSize: "9rem",
      y: 350,
      ease: "elastic",
    });
    gsap.from(".position", {
      opacity: 0,
      duration: 5,
      y: -100,
      fontSize: "9rem",
      ease: "elastic",
    });
    gsap.to(".position", {
      opacity: 1,
      duration: 5,
      fontSize: "9rem",
      y: 300,
      ease: "elastic",
    });
  }, []);
  return (
    <div className="basic">
      <h1 className="name" ref={nameRef}>
        Oscar Anillo
      </h1>
      <p className="position" ref={positionRef}>
        Sr. Fullstack Developer
      </p>
    </div>
  );
}
