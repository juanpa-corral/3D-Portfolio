// ServiceSummary.jsx (Optimizado para iPad Pro y Tablets)

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
    useGSAP(() => {
        // Animaciones GSAP (Mantener)
        gsap.to("#title-service-1", { xPercent: 20, scrollTrigger: { trigger: "#title-service-1", scrub: true, start: "top 60%" } });
        gsap.to("#title-service-2", { xPercent: -30, scrollTrigger: { trigger: "#title-service-2", scrub: true, start: "top 60%" } });
        gsap.to("#title-service-3", { xPercent: 100, scrollTrigger: { trigger: "#title-service-3", scrub: true, start: "top 60%" } });
        gsap.to("#title-service-4", { xPercent: -100, scrollTrigger: { trigger: "#title-service-4", scrub: true, start: "top 60%" } });
        gsap.to("#title-service-5", { xPercent: 50, scrollTrigger: { trigger: "#title-service-5", scrub: true, start: "top 60%" } });
    });

    return (
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive flex flex-col gap-y-8">

            {/* LÍNEA 1: Architecture */}
            <div id="title-service-1">
                <p>Architecture</p>
            </div>

            {/* LÍNEA 2: Development — CI/CD */}
            <div id="title-service-2" className="flex items-center justify-center gap-3">
                <p className="font-normal">Development</p>
                {/* Solo visible en XL: (escritorio grande) */}
                <div className="hidden xl:block w-10 h-1 md:w-32 bg-blue-800" />
                <p>CI/CD</p>
            </div>

            {/* LÍNEA 3: Backend — Frontend — Scale */}
            {/* CAMBIO CLAVE: Pasa de apilado (flex-col) a horizontal (flex-row) solo en XL: */}
            <div id="title-service-3" className="flex flex-col xl:flex-row items-center justify-center gap-y-1 gap-x-3">
                <p>Backend</p>
                <div className="hidden xl:block w-10 h-1 md:w-32 bg-blue-800" />
                <p className="italic">Frontend</p>
                <div className="hidden xl:block w-10 h-1 md:w-32 bg-blue-800" />
                <p>Scale</p>
            </div>

            {/* LÍNEA 4: Data Science — ML Models */}
            <div id="title-service-4" className="flex items-center justify-center gap-3">
                <p>Data Science</p>
                <div className="hidden xl:block w-10 h-1 md:w-32 bg-blue-800" />
                <p>ML Models</p>
            </div>

            {/* LÍNEA 5: AI Solutions — Optimize — Decisions */}
            {/* CAMBIO CLAVE: Pasa de apilado (flex-col) a horizontal (flex-row) solo en XL: */}
            <div id="title-service-5" className="flex flex-col xl:flex-row items-center justify-center gap-y-1 gap-x-3">
                <p>AI Solutions </p>
                <div className="hidden xl:block w-10 h-1 md:w-32 bg-blue-800" />
                <p className="italic">Optimize</p>
                <div className="hidden xl:block w-10 h-1 md:w-32 bg-blue-800" />
                <p>Decisions</p>
            </div>
        </section>
    );
};

export default ServiceSummary;