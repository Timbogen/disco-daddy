import * as THREE from "three";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { AnimationScript, executeAnimation, primaryBlue, primaryRed } from "@/app/util";
import { TinyColor } from "@ctrl/tinycolor";

/**
 * Rotating lights for the disco scene
 */
export const Lights: React.FC = () => {
    const parentRef = useRef<THREE.Mesh>(null);
    const [firstColor, setFirstColor] = useState(new THREE.Color(primaryRed));
    const [secondColor, setSecondColor] = useState(new THREE.Color(primaryBlue));

    /** The scroll animations for the light */
    const height = window.innerHeight;
    const animations: AnimationScript[] = useMemo(
        () => [
            {
                start: 0,
                end: height,
                handler: (progression) => {
                    const initial = new TinyColor(primaryBlue);
                    const target = new TinyColor(primaryRed);
                    const color = initial.mix(target, progression * 100).toHexString();
                    setFirstColor(new THREE.Color(primaryRed));
                    setSecondColor(new THREE.Color(color));
                },
            },
            {
                start: height,
                end: 2 * height,
                handler: (progression) => {
                    const initial = new TinyColor(primaryRed);
                    const target = new TinyColor(primaryBlue);
                    const color = initial.mix(target, progression * 100).toHexString();
                    setFirstColor(new THREE.Color(primaryRed));
                    setSecondColor(new THREE.Color(color));
                },
            },
            {
                start: 2 * height,
                end: 3 * height,
                handler: (progression) => {
                    const initial = new TinyColor(primaryRed);
                    const target = new TinyColor(primaryBlue);
                    const color = initial.mix(target, progression * 100).toHexString();
                    setFirstColor(new THREE.Color(color));
                    setSecondColor(new THREE.Color(primaryBlue));
                },
            },
        ],
        [height],
    );

    /** Execute the animations */
    useEffect(() => {
        const handleScroll = () => executeAnimation(animations, window.scrollY);
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animations]);

    /** Let the disco ball spin */
    useFrame(() => {
        const mesh = parentRef.current;
        if (mesh) {
            mesh.rotation.x -= 0.02;
            mesh.rotation.y -= 0.02;
        }
    });

    return (
        <mesh ref={parentRef}>
            <pointLight position={[10, 0, 10]} color={firstColor} intensity={25000} />
            <pointLight position={[-10, 0, -10]} color={firstColor} intensity={25000} />
            <pointLight position={[-10, 0, 10]} color={secondColor} intensity={25000} />
            <pointLight position={[10, 0, -10]} color={secondColor} intensity={25000} />
        </mesh>
    );
};
