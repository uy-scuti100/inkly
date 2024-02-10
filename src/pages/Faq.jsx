import React, { useRef } from "react";
import Transition from "../components/globals/transition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../components/globals/Navbar";

export default function Faq() {
  const faq = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(faq.current, 3, {
      duration: 1,
      y: -200,
      opacity: 0,
      ease: "power3.inOut",
      delay: 0.8,
    });

    tl.to(faq.current, 4, {
      duration: 1,
      y: 0,
      opacity: 1,
    });
  });
  return (
    <>
      <Transition prop="faq" />
      <Navbar />
      <section className="px-5 overflow-x-hidden " ref={faq}>
        <div className="relative h-screen pt-20">
          <h1 className="text-4xl font-black ">faq</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            aspernatur sapiente perferendis laborum commodi dolorem, deserunt
            sit, a provident quis obcaecati recusandae nam rem impedit! Unde
            provident dolorem dolores incidunt hic natus maxime magni eum iusto
            laborum consequatur minima distinctio libero magnam, cupiditate quo,
            facere molestiae mollitia. Ad non nihil, quaerat reiciendis
            repellendus doloribus. Similique, molestiae. A, earum ullam ducimus
            debitis odio aperia m iste enim magnam quidem soluta pariatur magni?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            aspernatur sapiente perferendis laborum commodi dolorem, deserunt
            sit, a provident quis obcaecati recusandae nam rem impedit! Unde
            provident dolorem dolores incidunt hic natus maxime magni eum iusto
            laborum consequatur minima distinctio libero magnam, cupiditate quo,
            facere molestiae mollitia. Ad non nihil, quaerat reiciendis
            repellendus doloribus. Similique, molestiae. A, earum ullam ducimus
            debitis odio aperia m iste enim magnam quidem soluta pariatur magni?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            aspernatur sapiente perferendis laborum commodi dolorem, deserunt
            sit, a provident quis obcaecati recusandae nam rem impedit! Unde
            provident dolorem dolores incidunt hic natus maxime magni eum iusto
            laborum consequatur minima distinctio libero magnam, cupiditate quo,
            facere molestiae mollitia. Ad non nihil, quaerat reiciendis
            repellendus doloribus. Similique, molestiae. A, earum ullam ducimus
            debitis odio aperia m iste enim magnam quidem soluta pariatur magni?
          </p>
        </div>
      </section>
    </>
  );
}
