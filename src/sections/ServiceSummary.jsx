// ServiceSummary.jsx

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
    useGSAP(() => {
        // MODIFICACIÓN CLAVE: Agregar 'start: "top 80%"' a todos los ScrollTriggers

        gsap.to("#title-service-1", {
            xPercent: 20,
            scrollTrigger: {
                trigger: "#title-service-1",
                scrub: true,
                start: "top 70%", // La animación empieza cuando el título está al 80% de la vista
            },
        });
        gsap.to("#title-service-2", {
            xPercent: -30,
            scrollTrigger: {
                trigger: "#title-service-2",
                scrub: true,
                start: "top 70%",
            },
        });
        gsap.to("#title-service-3", {
            xPercent: 100,
            scrollTrigger: {
                trigger: "#title-service-3",
                scrub: true,
                start: "top 70%",
            },
        });
        gsap.to("#title-service-4", {
            xPercent: -100,
            scrollTrigger: {
                trigger: "#title-service-4",
                scrub: true,
                start: "top 70%",
            },
        });
        gsap.to("#title-service-5", {
            xPercent: 50,
            scrollTrigger: {
                trigger: "#title-service-5",
                scrub: true,
                start: "top 70%",
            },
        });
    });

    return (
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">

            {/* LÍNEA 1: Architecture */}
            <div id="title-service-1">
                <p>Architecture</p>
            </div>

            {/* LÍNEA 2: Development — CI/CD */}
            <div id="title-service-2" className="flex items-center justify-center gap-3">
                <p className="font-normal">Development</p>
                <div className="w-10 h-1 md:w-32 bg-blue-800" />
                <p>CI/CD</p>
            </div>

            {/* LÍNEA 3: API & Spring Boot — Frontends — Scalability */}
            <div id="title-service-3" className="flex items-center justify-center gap-3">
                <p>API & Spring Boot</p>
                <div className="w-10 h-1 md:w-32 bg-blue-800" />
                <p className="italic">Frontends</p>
                <div className="w-10 h-1 md:w-32 bg-blue-800" />
                <p>Scalability</p>
            </div>

            {/* LÍNEA 4: Data Analytics — ML Algorithms */}
            <div id="title-service-4" className="flex items-center justify-center gap-3">
                <p>Data Analytics</p>
                <div className="w-10 h-1 md:w-32 bg-blue-800" />
                <p>ML Algorithms</p>
            </div>

            {/* LÍNEA 5: AI/ML Solutions — Optimization — Decision-Making */}
            <div id="title-service-5" className="flex items-center justify-center gap-3">
                <p>AI/ML Solutions </p>
                <div className="w-10 h-1 md:w-32 bg-blue-800" />
                <p className="italic">Optimization</p>
                <div className="w-10 h-1 md:w-32 bg-blue-800" />
                <p>Decision-Making</p>
            </div>
        </section>
    );
};

export default ServiceSummary;