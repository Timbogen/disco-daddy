import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Rotating lights for the disco scene
 */
export const Lights: React.FC = () => {
    const parentRef = useRef<THREE.Mesh>(null);
    /** Let the disco ball spin */
    useFrame(() => {
        const mesh = parentRef.current;
        if (mesh) mesh.rotation.y -= 0.02;
        if (mesh) mesh.rotation.x -= 0.02;
    });

    return (
        <mesh ref={parentRef}>
            <pointLight position={[10, 0, 10]} color={new THREE.Color(0xf2a7b9)} intensity={25000} />
            <pointLight position={[-10, 0, -10]} color={new THREE.Color(0xf2a7b9)} intensity={25000} />
            <pointLight position={[-10, 0, 10]} color={new THREE.Color(0x56a1e2)} intensity={25000} />
            <pointLight position={[10, 0, -10]} color={new THREE.Color(0x56a1e2)} intensity={25000} />
        </mesh>
    );
};
