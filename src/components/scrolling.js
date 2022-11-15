import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRecap() {
  const circleARef = useRef(null);
  const circleBRef = useRef(null);
  const circleCRef = useRef(null);
  const circleDRef = useRef(null);

  useEffect(() => {
    gsap.to(".a", {
      x: 40,
      duration: 3,
      scrollTrigger: {
        trigger: ".a",
        toggleActions: "restart pause resume reset",
      },
    });
    gsap.to(".b", {
      x: -40,
      duration: 3,
      scrollTrigger: {
        trigger: ".a",
        toggleActions: "restart pause resume reset",
      },
    });
    gsap.to(".c", {
      x: 40,
      duration: 3,
      scrollTrigger: {
        trigger: ".c",
        toggleActions: "restart pause resume reset",
      },
    });
    gsap.to(".d", {
      x: -40,
      duration: 3,
      scrollTrigger: {
        trigger: ".a",
        toggleActions: "restart pause resume reset",
      },
    });
  }, []);
  return (
    <div className="scroll">
      <div className="box a" ref={circleARef}>
        A
      </div>
      <div className="box b" ref={circleBRef}>
        B
      </div>
      <div className="box c" ref={circleCRef}>
        C
      </div>
      <div className="box d" ref={circleDRef}>
        D
      </div>
    </div>
  );
}
