import "../../../styles/homepage/hero-section.css";
import Navbar from "../globals/Navbar";

export default function Herosection() {
  return (
    <section className="relative hero-section">
      <Navbar />

      <div className="absolute inset-0 bg-[#8099eb87] opacity-50" />
      <video
        preload="auto"
        src="/hero.mp4"
        playsInline
        muted
        loop
        autoPlay
        className="absolute"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
