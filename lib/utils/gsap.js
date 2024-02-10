import { gsap } from "gsap";

export const animateLoader = (
  loaderRef,
  loaderBgRef,
  loader2Ref,
  preloaderRef
) => {
  const tl = gsap.timeline();

  tl.to(loaderRef, {
    scale: 0.5,
    ease: "power4.inOut",
    duration: 2,
    delay: 4,
  })
    .to(loaderBgRef, {
      height: 0,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 5,
    })
    .to(loader2Ref, {
      height: 0,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 5.5,
    })
    .to(loaderRef, {
      height: 0,
      top: "30%",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 5.5,
    })
    .to(preloaderRef, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 5.2,
    });

  return tl;
};
