// About.jsx (Versión final con Iconify)

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { aboutData } from "../constants/index"; // <-- Asegúrate que la ruta sea correcta
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

// 1. IMPORTA EL COMPONENTE ICON
import { Icon } from '@iconify/react';

const About = () => {
  const text = `Engineering full-stack systems and data intelligence 
to build high-performance, scalable solutions 
from prototype to production`;

  const imgRef = useRef(null);
  
  // (Aquí va tu código de useGSAP, no es necesario cambiarlo)
  useGSAP(() => {
    // ... tu animación de GSAP ...
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 lg:flex-row lg:items-start">
        <img
          ref={imgRef}
          src="images/man.JPEG"
          alt="Juan Pablo Corral"
          className="w-full max-w-md rounded-3xl object-cover"
        />

        <div className="w-full text-xl font-light tracking-wide md:text-2xl lg:text-3xl text-white/70">
          {aboutData.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h3 key={index} className="mt-8 mb-4 text-xl font-semibold tracking-wider text-white uppercase md:text-2xl">
                    {section.content}
                  </h3>
                );
              case 'paragraph':
                return (
                  <p key={index} className="mb-6 leading-relaxed">
                    {section.content}
                  </p>
                );
              case 'list':
                return (
                  <ul key={index} className="space-y-4">
                    {/* 2. AQUÍ ESTÁ LA LÓGICA ACTUALIZADA */}
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-x-4">
                        <Icon 
                          icon={item.icon} 
                          className="text-blue-500 text-2xl mt-1 flex-shrink-0 lg:text-3xl" 
                        />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default About;