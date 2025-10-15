// Contact.jsx

import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import IsotipoIcon from "../components/IsotipoIcon";

const Contact = () => {

  const getSocialIcon = (socialName) => {
    switch (socialName.toLowerCase()) {
      case 'instagram':
        return <FaInstagram className="w-5 h-5" />;
      case 'linkedin':
        return <FaLinkedin className="w-5 h-5" />;
      case 'github':
        return <FaGithub className="w-5 h-5" />;
      default:
        return null;
    }
  };

  // UPDATED HEADER TEXT
  const text = `Got a question, technical challenge, or project idea?
    We'd love to hear from you and discuss solutions and scope!`;

  // UPDATED MARQUEE SLOGAN: Focus on brand pillars
  const items = [
    "Architecture. Intelligence. Advantage.",
    "Architecture. Intelligence. Advantage.",
    "Architecture. Intelligence. Advantage.",
    "Architecture. Intelligence. Advantage.",
    "Architecture. Intelligence. Advantage.",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, We Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-blue-400" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                {/* YOUR REAL EMAIL */}
                juanpacorralh@jpcodai.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-blue-400" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                {/* YOUR REAL PHONE NUMBER */}
                (+57) 316 318 1253
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-blue-400" />
              <div className="flex flex-col flex-wrap md:flex-row gap-x-4 gap-y-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {getSocialIcon(social.name)}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee
        items={items}
        CustomIcon={IsotipoIcon}
        iconClassName="w-8 h-8 text-white" // Hacemos el isotipo blanco
      />
    </section>
  );
};

export default Contact;