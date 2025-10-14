import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
const text = `Engineering full-stack systems and data intelligence 
to build high-performance, scalable solutions 
from prototype to production`;

const aboutText = `I am a Dual Degree student specializing in Software Architecture and AI/Data Science, driven by a passion for creating truly intelligent systems. My expertise spans the entire development lifecycle—from designing resilient architectures to deploying predictive Machine Learning models.

My hands-on experience includes:
⚡ Full-Stack Development using Java Spring Boot and React.js.
🧠 Building ML models (Scikit-learn) for optimization and anomaly detection in financial data.
☁️ Implementing CI/CD pipelines and designing enterprise architectures for cloud scalability (OCI/AWS focus).

When I'm not engineering systems:
💻 I'm contributing to open-source projects or exploring new data visualization techniques.
🏆 I focus on leadership and personal performance, awarded the Sabana Excellence Scholarship for outstanding results.
🎸 I enjoy blending technical problem-solving with creative outlets like music and leadership.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.JPEG"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
