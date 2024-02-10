import "../../../styles/homepage/hero-section.css";
import Navbar from "../globals/Navbar";

export default function Herosection() {
  return (
    <section className="relative hero-section">
      <Navbar />

      <div className="absolute inset-0 bg-[#8099eb87] opacity-50" />
      <video muted loop autoPlay className="relative">
        <source src="/0123.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
