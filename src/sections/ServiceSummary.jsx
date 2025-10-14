// ServiceSummary.jsx (Final: Animaciones de Zigzag Restauradas y Wipe en Hover)

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Icon } from "@iconify/react"; 
gsap.registerPlugin(ScrollTrigger);


// --- SUBCOMPONENTE CLAVE: PASTILLA ANIMADA CON EFECTO WIPE ---
const AnimatedPill = ({ text, isItalic, isLast, iconName, isTitle }) => {
    const pillRef = useRef(null);

    // Clases base y sombra para el efecto futurista (Azul/Negro)
    const pillClasses = isTitle 
        ? "border-2 border-blue-600 shadow-lg shadow-blue-500/50" 
        : "border-2 border-blue-600 shadow-md shadow-blue-400/40"; 
        
    const textClasses = `relative z-10 text-black lg:text-[32px] md:text-[26px] text-[20px] leading-none uppercase ${isItalic ? 'italic' : 'font-normal'}`;
    const iconSize = isTitle ? "size-6" : "size-5"; 

    const handleMouseEnter = () => {
        // La animación de GSAP (wipe) se ejecuta AQUÍ
        gsap.to(pillRef.current.querySelector('.wipe-overlay'), {
            scaleX: 1, 
            duration: 0.8,
            ease: "power2.out"
        });
        // Transición de color del texto y el icono a blanco
        gsap.to(pillRef.current.querySelector('p'), { color: 'white', duration: 0.3 });
        gsap.to(pillRef.current.querySelector('svg'), { color: 'white', duration: 0.3 });
    };

    const handleMouseLeave = () => {
        // La animación de GSAP (revertir wipe) se ejecuta AQUÍ
        gsap.to(pillRef.current.querySelector('.wipe-overlay'), {
            scaleX: 0, // Vuelve a ser invisible
            duration: 0.5,
            ease: "power2.out"
        });
        // Transición de color del texto y el icono de vuelta a negro
        gsap.to(pillRef.current.querySelector('p'), { color: 'black', duration: 0.3 });
        gsap.to(pillRef.current.querySelector('svg'), { color: 'black', duration: 0.3 });
    };

    return (
        <React.Fragment>
            {/* Separador Izquierdo (Línea y Punto) */}
            <div className="hidden xl:flex items-center gap-1.5">
                <div className="w-5 h-0.5 bg-blue-600" />
                <div className="size-1.5 rounded-full bg-blue-600" />
            </div>

            {/* La Pastilla con Animación y Borde */}
            <div
                ref={pillRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={pillClasses + " relative flex items-center rounded-full px-3 py-1.5 overflow-hidden cursor-pointer"}
            >
                {/* Overlay/Degradado Animado (Wipe Effect) */}
                <div 
                    className="wipe-overlay absolute inset-0 rounded-full origin-right"
                    style={{
                        background: "linear-gradient(to right, #007bff, #0047AB)", // Degradado Azul
                        transform: "scaleX(0)", // Inicialmente invisible
                    }}
                ></div>

                {/* Contenido (Icono y Texto) */}
                <Icon icon={iconName} className={iconSize + " mr-1.5 relative z-10 text-black transition-colors duration-300"} />
                <p className={textClasses}>{text}</p>
            </div>
            
            {/* Separador Derecho (Punto y Línea) */}
            {!isLast && (
                <div className="hidden xl:flex items-center gap-1.5">
                    <div className="size-1.5 rounded-full bg-blue-600" />
                    <div className="w-5 h-0.5 bg-blue-600" />
                </div>
            )}
        </React.Fragment>
    );
};


const ServiceSummary = () => {
    // RESTAURACIÓN DEL ZIGZAG GSAP: Revertir xPercent a valores dinámicos
    useGSAP(() => {
        gsap.to("#title-service-1", { xPercent: 20, scrollTrigger: { trigger: "#title-service-1", scrub: true, start: "top 60%" } }); 
        gsap.to("#title-service-2", { xPercent: -30, scrollTrigger: { trigger: "#title-service-2", scrub: true, start: "top 60%" } }); 
        gsap.to("#title-service-3", { xPercent: 100, scrollTrigger: { trigger: "#title-service-3", scrub: true, start: "top 60%" } }); 
        gsap.to("#title-service-4", { xPercent: -100, scrollTrigger: { trigger: "#title-service-4", scrub: true, start: "top 60%" } }); 
        gsap.to("#title-service-5", { xPercent: 50, scrollTrigger: { trigger: "#title-service-5", scrub: true, start: "top 60%" } }); 
    });


    return (
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive flex flex-col gap-y-8"> 
            
            {/* LÍNEA 1: JPCODAI / INTELLIGENT ARCHITECTURE (Pastilla Principal) */}
            <div id="title-service-1" className="flex justify-center items-center px-4">
                <AnimatedPill text="JPCODAI / INTELLIGENT ARCHITECTURE" iconName="material-symbols:rocket-launch-outline" isTitle={true} isLast={true} />
            </div>

            {/* LÍNEA 2: Development — CI/CD */}
            <div id="title-service-2" className="flex flex-wrap items-center justify-center gap-2">
                <AnimatedPill text="DEVELOPMENT" iconName="material-symbols:code-blocks-outline" />
                <AnimatedPill text="CI/CD" iconName="codicon:issue-reopened" isLast={true} />
            </div>

            {/* LÍNEA 3: Backend — Frontend — Scale */}
            <div id="title-service-3" className="flex flex-wrap items-center justify-center gap-2">
                <AnimatedPill text="BACKEND" iconName="codicon:server-process" /> 
                <AnimatedPill text="FRONTEND" iconName="material-symbols:computer-outline" isItalic={true} />
                <AnimatedPill text="SCALE" iconName="material-symbols:trending-up" isLast={true} />
            </div>

            {/* LÍNEA 4: Data Science — ML Models */}
            <div id="title-service-4" className="flex flex-wrap items-center justify-center gap-2">
                <AnimatedPill text="DATA SCIENCE" iconName="material-symbols:database-outline" />
                <AnimatedPill text="ML MODELS" iconName="material-symbols:psychology-outline" isLast={true} />
            </div>

            {/* LÍNEA 5: AI Solutions — Optimize — Decisions */}
            <div id="title-service-5" className="flex flex-wrap items-center justify-center gap-2"> 
                <AnimatedPill text="AI SOLUTIONS" iconName="devicon-plain:networkx" /> 
                <AnimatedPill text="OPTIMIZE" iconName="material-symbols:tune-rounded" isItalic={true} />
                <AnimatedPill text="DECISIONS" iconName="ic:baseline-call-split" isLast={true} />
            </div>
            
        </section>
    );
};

export default ServiceSummary;