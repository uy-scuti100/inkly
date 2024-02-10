import { useEffect, useRef, useState } from "react";
import "../../../styles/globals/navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const dividerRef = useRef(null);
  const params = window.location.pathname;
  console.log(params);

  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(menuRef.current, { duration: 0.3, opacity: 1 });
    tl.current.to(
      menuRef.current,
      {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "polygon(49.75% 0%, 50.25% 0%, 50.25% 100%, 49.75% 100%)",
      },
      "-=0.3"
    );

    tl.current.to(menuRef.current, {
      duration: 1,
      ease: "power3.inOut",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      pointerEvents: "all",
    });

    tl.current.to(
      dividerRef.current,
      {
        duration: 1,
        ease: "power4.inOut",
        height: "100%",
      },
      "-=0.75"
    );

    return () => {
      // Cleanup animations on unmount
      tl.current.kill();
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    isOpen ? tl.current.reverse() : tl.current.play();
  };

  const handleClose = () => {
    setIsOpen(false);
    tl.current.reverse();
  };

  return (
    <header>
      <nav
        className={`${
          isOpen
            ? " opacity-0 -translate-y-[1000px]"
            : "opacity-100 translate-y-[0]"
        } duration-500 transition-all ease-in-out`}
      >
        <div className="nav-items">
          <div className="logo">
            <div className="link">
              <Link
                className={`relative ${
                  params === "/" ? "text-white" : "text-black"
                }`}
                to="/"
              >
                Inkly
                <div className="text-[#ff9900] text-7xl absolute -top-8 -right-5">
                  .
                </div>
              </Link>
            </div>
          </div>

          <div
            className={`links ${params === "/" ? "text-white" : "text-black"}`}
          >
            <div className="link">
              <Link to="/about">About</Link>
            </div>

            <div className="link">
              <Link to="/gallery">Gallery</Link>
            </div>
            <div className="link">
              <Link to="/team">Team</Link>
            </div>

            <div className="link">
              <Link to="/newsletter">Newsletter</Link>
            </div>
            <div className="link">
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="nav-sub-items">
          <div className="cursor-pointer toggle" onClick={handleToggle}>
            <svg
              width="50px"
              height="50px%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke={`${params === "/" ? "#ffffff" : "#000"}`}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clip-path="url(#ffffffclip0_429_11064)">
                  {" "}
                  <rect
                    x="12.01"
                    y="12"
                    width="0.01"
                    height="0.01"
                    transform="rotate(90 12.01 12)"
                    stroke={`${params === "/" ? "#ffffff" : "#000"}`}
                    stroke-width="3.75"
                    stroke-linejoin="round"
                  ></rect>{" "}
                  <rect
                    x="19.01"
                    y="12"
                    width="0.01"
                    height="0.01"
                    transform="rotate(90 19.01 12)"
                    stroke={`${params === "/" ? "text-white" : "text-black"}`}
                    stroke-width="3.75"
                    stroke-linejoin="round"
                  ></rect>{" "}
                  <rect
                    x="5.01001"
                    y="12"
                    width="0.01"
                    height="0.01"
                    transform="rotate(90 5.01001 12)"
                    stroke={`${params === "/" ? "#ffffff" : "#000"}`}
                    stroke-width="3.75"
                    stroke-linejoin="round"
                  ></rect>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_429_11064">
                    {" "}
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.000915527)"
                    ></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
          </div>
          <div
            className={`sub-items-links ${
              params === "/" ? "text-white" : "text-black"
            }`}
          >
            <div className="link">
              <Link to="/contact" className="whitespace-nowrap">
                Book Here
              </Link>
            </div>
            <div className="hidden link md:block">
              <Link to="/contact" className="whitespace-nowrap">
                Lets Talk
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed top-0 left-0 flex justify-between w-screen h-screen text-white uppercase bg-black menu"
      >
        <div className="flex flex-col justify-between px-5 pb-5">
          <div className="text-[2rem] pt-5">
            <Link to={"/"} className="relative" onClick={handleClose}>
              Inkly{" "}
              <div className="text-[#ff9900] text-7xl absolute -top-8 -right-5">
                .
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-5 pb-10 text-2xl md:text-3xl md:pb-0 ">
            <div className="link" onClick={handleClose}>
              <Link to="/about">About</Link>
            </div>
            <div className="link" onClick={handleClose}>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="link" onClick={handleClose}>
              <Link to="/gallery">Gallery</Link>
            </div>
            <div className="link" onClick={handleClose}>
              <Link to="/team">Team</Link>
            </div>

            <div className="link" onClick={handleClose}>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="divider" ref={dividerRef}></div>

        {/* tagline */}

        <div className="flex flex-col items-center justify-between p-5 ml-4 text-lg md:text-2xl">
          <div className="flex items-center gap-5 ">
            <p>Automotive</p>
            <div className="close-btn close">
              <svg
                onClick={handleClose}
                style={{ objectFit: "cover" }}
                width="40px"
                height="50px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                transform="rotate(0)matrix(-1, 0, 0, -1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#ffffffCCCCCC"
                  stroke-width="0.144"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_LG">
                    {" "}
                    <path
                      id="Vector"
                      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>

          <div>
            <div>
              <p to="/contact">
                Talk with an expert <br /> at &nbsp;
                <Link
                  to={"/contact"}
                  className="text-[#ff9900] uppercase"
                  onClick={handleClose}
                >
                  Inkly.
                </Link>
              </p>
            </div>
          </div>
          <div>
            <div>
              <Link to="/book" onClick={handleClose}>
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
