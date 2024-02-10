import React, { useRef } from "react";
import "../../../styles/globals/transition.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Transition({ prop }) {
  const transition = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(transition.current, {
      duration: 0.8,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power3.inOut",
      delay: 0,
    });
    tl.to(transition.current, {
      duration: 0.8,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power3.inOut",
    });
    tl.to(transition.current, {
      duration: 0.8,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div className="transition-effect edito" ref={transition}>
      {prop}
    </div>
  );
}
