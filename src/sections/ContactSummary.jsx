import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Architecture",
    "Intelligence",
    "Scalability",
    "Optimization",
    "Precision",
  ];
  const items2 = [
    "Drive Results",
    "Drive Results",
    "Drive Results",
    "Drive Results",
    "Drive Results",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s architect an <br />
          <span className="font-normal">Intelligent System</span> and{" "}
          <span className="italic">drive Measurable Growth</span> <br />
          with <span className="text-blue-800">JPcodai</span> “ {/* Used blue-800 for accent */}
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-blue-800 stroke-2 text-blue-800"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
