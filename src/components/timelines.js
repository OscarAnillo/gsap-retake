import { useEffect } from "react";
import { gsap } from "gsap";

export default function Timelines() {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(".green", {
      x: -200,
      scale: 2,
      rotation: 360,
      duration: 1,
      repeat: 1,
      yoyo: true,
    });
    tl.to(".purple", {
      x: 200,
      scale: 2,
      rotation: 360,
      duration: 1,
      repeat: 1,
      yoyo: true,
    });
    tl.to(".orange", {
      y: -200,
      scale: 2,
      duration: 1,
      rotation: 180,
      repeat: 1,
      yoyo: true,
    });
    tl.to(".red", {
      x: 200,
      scale: 3,
      duration: 1,
      rotation: 180,
      repeat: 1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="main-div">
      <div className="green"></div>
      <div className="purple"></div>
      <div className="orange"></div>
      <div className="red"></div>
      <div></div>
    </div>
  );
}
