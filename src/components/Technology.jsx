// Technology.jsx

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

// Definición de Colores Elegantes (Paleta de Alto Contraste: Negro y Azul)
const COLOR_NEGRO_CARBON = '#FFFF';
const COLOR_AZUL_ELECTRICO = '#0047AB'; // Un azul intenso y confiable
const COLOR_GRIS_FRANCES = '#AAAAAA';

export function Technology(props) {
  const shapeContainer = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const ring3 = useRef(null);
  const { nodes } = useGLTF('/models/Modern Technology Era.gltf')

  useGSAP(() => {
    // ... (Animación GSAP sin cambios) ...
    const tl = gsap.timeline();
    tl.from(shapeContainer.current.position, {
      y: 3,
      duration: 3,
      ease: "circ.out",
    });
    tl.from(ring2.current.rotation, {
      x: 0,
      y: Math.PI,
      z: -Math.PI,
      duration: 10,
      ease: "power1.inOut",
    }, "-=25%");
    tl.from(ring1.current.rotation, {
      x: 0,
      y: -Math.PI,
      z: Math.PI,
      duration: 10,
      ease: "power1.inOut"
    }, "<");
    tl.from(ring3.current.rotation, {
      x: 0,
      y: -Math.PI,
      z: Math.PI,
      duration: 10,
      ease: "power1.inOut"
    }, "<")
  }, [])

  // Materiales Estándar que usarás en el GLTF (revertidos a Azul)
  const DarkMaterial = <meshStandardMaterial color={COLOR_NEGRO_CARBON} metalness={0.8} roughness={0.4} />;
  const AccentMaterial = <meshStandardMaterial color={COLOR_AZUL_ELECTRICO} metalness={0.9} roughness={0.2} />;
  const TransparentAccentMaterial = <meshStandardMaterial color={COLOR_AZUL_ELECTRICO} metalness={0.9} roughness={0.2} transparent opacity={0.7} />;
  const DetailMaterial = <meshStandardMaterial color={COLOR_GRIS_FRANCES} metalness={0.9} roughness={0.2} />;


  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      <group scale={0.0018}>
        <directionalLight intensity={0.7} decay={2} rotation={[0.371, 0.409, -0.775]} />
        <group position={[0, 428.314, 0]}>

          {/* ANILLOS Y ESFERAS ORBITALES (ACENTO) */}
          <group ref={ring2} position={[-8.948, 219.5, 0]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Sphere_2.geometry} position={[-405.523, 76.416, 0]}>
              {AccentMaterial}
            </mesh>
            <mesh geometry={nodes.Torus_2.geometry} position={[5.365, -10.7, -3.667]} rotation={[Math.PI / 2, -0.209, 0]}>
              {TransparentAccentMaterial}
            </mesh>
          </group>
          <group ref={ring1} position={[0, 207.02, -7.234]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Torus.geometry} position={[0, 0, 7.234]} rotation={[Math.PI / 2, Math.PI / 10, 0]}>
              {TransparentAccentMaterial}
            </mesh>
            <mesh geometry={nodes.Sphere.geometry} position={[0.033, 0.79, -478.881]} rotation={[Math.PI / 10, 0, 0]}>
              {DetailMaterial}
            </mesh>
          </group>

          {/* CUBOS FLOTANTES DE DATOS (ACENTO) */}
          <group position={[-11.262, -224.33, 985.435]} rotation={[1.065, -1.501, -1.431]}>
            <mesh geometry={nodes.Cube_3.geometry} position={[-31.459, 31.459, -31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube_3_1.geometry} position={[-31.459, 31.459, 31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube_3_2.geometry} position={[31.459, 31.459, -31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube_3_3.geometry} position={[31.459, 31.459, 31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube_3_4.geometry} position={[-31.459, -31.459, -31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube_3_5.geometry} position={[-31.459, -31.459, 31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube_3_6.geometry} position={[31.459, -31.459, -31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube_3_7.geometry} position={[31.459, -31.459, 31.459]} rotation={[0, 0, -Math.PI / 2]} scale={0.983}>{AccentMaterial}</mesh>
          </group>

          {/* GRUPO DE CUBOS Y DATOS INFERIORES (ACENTO) */}
          <group position={[5.505, 250.63, -4.89]} rotation={[-2.74, -1.396, -Math.PI]}>
            <mesh geometry={nodes.Cube_2.geometry} position={[-13.845, -36.76, -26.412]} rotation={[0, 0, -Math.PI / 2]} scale={0.848}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Cube.geometry} position={[9.391, 32.306, 21.958]} rotation={[0, 0, -Math.PI / 2]} scale={0.848}>{AccentMaterial}</mesh>

            {/* Pequeños Cubos/Datos (Combinación de Acento y Detalle) */}
            <group position={[-13.845, -36.76, -26.412]} rotation={[0, 0, -Math.PI / 2]} scale={0.848}>
              <mesh geometry={nodes.mesh_12_instance_1.geometry} position={[-165.197, -135.3, -135.3]} scale={0.321}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_2.geometry} position={[-133.755, -135.3, 0]} scale={1.035}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_3.geometry} position={[-135.3, -135.3, 135.3]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_4.geometry} position={[-133.755, 0, -135.3]} scale={1.035}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_5.geometry} position={[-135.3, 0, 0]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_6.geometry} position={[-165.197, 0, 135.3]} scale={0.321}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_7.geometry} position={[-135.3, 135.3, -135.3]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_8.geometry} position={[-135.3, 135.3, 0]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_9.geometry} position={[-103.312, 135.3, 135.3]} scale={1.727}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_10.geometry} position={[0, -135.3, -135.3]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_11.geometry} position={[0, -135.3, 0]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_12.geometry} position={[0, -135.3, 135.3]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_13.geometry} position={[-11.897, 0, -135.3]} scale={0.73}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_14.geometry}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_15.geometry} position={[0, 0, 135.3]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_16.geometry} position={[10.019, 135.3, -135.3]} scale={1.228}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_17.geometry} position={[33.532, 135.3, 0]} scale={1.762}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_18.geometry} position={[11.897, 135.3, 135.3]} scale={1.27}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_19.geometry} position={[147.197, -135.3, -135.3]} scale={1.27}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_20.geometry} position={[165.197, -135.3, 0]} scale={1.679}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_21.geometry} position={[103.312, -135.3, 135.3]} scale={0.273}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_22.geometry} position={[165.197, 0, -135.3]} scale={1.679}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_23.geometry} position={[135.3, 0, 0]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_24.geometry} position={[135.3, 0, 135.3]}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_25.geometry} position={[100.223, 135.3, -135.3]} scale={0.203}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_26.geometry} position={[123.403, 135.3, 0]} scale={0.73}>{AccentMaterial}</mesh>
              <mesh geometry={nodes.mesh_12_instance_27.geometry} position={[115.422, 135.3, 135.3]} scale={0.548}>{AccentMaterial}</mesh>
            </group>

            {/* El grupo mesh_13 contiene cubos que deberían ser de color Dark o Accent, elegimos Dark para estructura */}
            <group position={[9.391, 32.306, 21.958]} rotation={[0, 0, -Math.PI / 2]} scale={0.848}>
              {/* Reemplazar todos los materiales dentro de este grupo con DarkMaterial o AccentMaterial */}
              <mesh geometry={nodes.mesh_13_instance_1.geometry} position={[0, -135.3, -135.3]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_2.geometry} position={[0, -135.3, 0]} scale={[1.471, 1.433, 1.342]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_3.geometry} position={[0, -135.3, 135.3]} scale={[0.529, 0.567, 0.658]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_4.geometry} position={[0, 0, -135.3]} scale={[1.538, 1.495, 1.391]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_5.geometry} scale={[1.471, 1.433, 1.342]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_6.geometry} position={[0, 0, 135.3]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_7.geometry} position={[0, 135.3, -135.3]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_8.geometry} position={[0, 135.3, 0]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_9.geometry} position={[0, 135.3, 135.3]} scale={[0.933, 0.939, 0.951]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_10.geometry} position={[135.3, -135.3, -135.3]} scale={[0.529, 0.567, 0.658]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_11.geometry} position={[135.3, -135.3, 0]} scale={[0.529, 0.567, 0.658]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_12.geometry} position={[135.3, -135.3, 135.3]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_13.geometry} position={[135.3, 0, -135.3]} scale={[1.404, 1.372, 1.293]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_14.geometry} position={[135.3, 0, 0]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_15.geometry} position={[135.3, 0, 135.3]} scale={[0.529, 0.567, 0.658]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_16.geometry} position={[135.3, 135.3, -135.3]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_17.geometry} position={[135.3, 135.3, 0]} scale={[0.933, 0.939, 0.951]}>{DarkMaterial}</mesh>
              <mesh geometry={nodes.mesh_13_instance_18.geometry} position={[135.3, 135.3, 135.3]} scale={[1.538, 1.495, 1.391]}>{DarkMaterial}</mesh>
            </group>
          </group>

          {/* OTROS ELEMENTOS (DETALLE Y ACENTO) */}
          <group position={[-741.75, -209.86, 258.413]} rotation={[Math.PI, 0, Math.PI / 2]} scale={1.13}>
            <mesh geometry={nodes.Ellipse_2.geometry} position={[0, -20.1, 0]} rotation={[-Math.PI / 2, 0, 1.676]}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Ellipse.geometry} position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]}>{DarkMaterial}</mesh>
          </group>

          {/* CAPAS PRINCIPALES DEL STACK (AZUL y NEGRO) */}
          <mesh geometry={nodes.Boolean_3.geometry} position={[0, 38.131, 0]} scale={[1, 0.637, 1]}>{AccentMaterial}</mesh>
          <mesh geometry={nodes.Boolean_2.geometry} position={[0, -270.324, 0]} scale={1.062}>{DarkMaterial}</mesh>

          {/* GRUPO DE RECTANGULOS (DETALLE/ESTRUCTURA) */}
          <group position={[-61.765, -244.83, -986.033]} rotation={[Math.PI / 2, 0, 0]} scale={0.91}>
            <mesh geometry={nodes.Rectangle_13.geometry} position={[68.314, 0, 123.784]} scale={1.099}>{DarkMaterial}</mesh>
            <mesh geometry={nodes.Rectangle_18.geometry} position={[152.48, 0, -1]}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Rectangle_18_1.geometry} position={[76.24, 0, 50]} scale={[1, 1, 0.695]}>{AccentMaterial}</mesh>
            <mesh geometry={nodes.Rectangle_18_2.geometry} position={[0, 0, 100]} scale={[1, 1, 0.695]}>{AccentMaterial}</mesh>
          </group>

          {/* ANILLO INFERIOR (ACENTO) */}
          <mesh ref={ring3} geometry={nodes.Torus_3.geometry} position={[0, -228.444, 983.294]} rotation={[Math.PI / 2, -0.209, 0]}>{TransparentAccentMaterial}</mesh>

          {/* RECTANGULOS FLOTANTES (ESTRUCTURA/DETALLE) */}
          <mesh geometry={nodes.Rectangle_1.geometry} position={[984.676, -377.312, 245.937]} rotation={[Math.PI / 2, 0, 0]}>{AccentMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_2.geometry} position={[-739.547, -314.318, 247.947]} rotation={[Math.PI / 2, 0, 0]}>{AccentMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_3.geometry} position={[-1238.082, -373.484, -497.537]} rotation={[Math.PI / 2, 0, 0]}>{DarkMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_4.geometry} position={[0, -346.599, 986.112]} rotation={[Math.PI / 2, 0, 0]}>{DarkMaterial}</mesh>

          {/* Capas Inferiores del Stack (NEGRO CARBÓN) */}
          <mesh geometry={nodes.Rectangle_5.geometry} position={[0, -134.326, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.062}>{DarkMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_6.geometry} position={[0, -257.068, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.062}>{DarkMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_7.geometry} position={[0, -274.079, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.062}>{DarkMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_8.geometry} position={[0, -322.698, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>{DarkMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_9.geometry} position={[0, -393.573, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>{DarkMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_10.geometry} position={[0, -400.751, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>{DarkMaterial}</mesh>
          <mesh geometry={nodes.Rectangle_11.geometry} position={[0, -416.236, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>{DarkMaterial}</mesh>

        </group>
      </group>
      <OrthographicCamera
        makeDefault={false}
        far={100000}
        near={0}
        position={[267.373, 649.259, 990.455]}
        rotation={[-0.564, 0.59, 0.339]}
      />
    </group>
  )
}

useGLTF.preload('/models/Modern Technology Era.gltf')