import * as THREE from "three";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
    AnimationScript,
    executeAnimation,
    getSectionPosition,
    primaryBlue,
    primaryRed,
    useDebouncedResize,
} from "@/app/util";
import { TinyColor } from "@ctrl/tinycolor";

/**
 * Rotating lights for the disco scene
 */
export const Lights: React.FC = () => {
    const parentRef = useRef<THREE.Mesh>(null);
    const [firstColor, setFirstColor] = useState(new THREE.Color(primaryRed));
    const [secondColor, setSecondColor] = useState(new THREE.Color(primaryBlue));
    const resizeCount = useDebouncedResize();

    /** The scroll animations for the light */
    const aboutPos = getSectionPosition("about");
    const spotifyPos = getSectionPosition("spotify");
    const galleryPos = getSectionPosition("gallery");
    const contactPos = getSectionPosition("contact");
    const animations: AnimationScript[] = useMemo(() => {
        const endAnimation: AnimationScript = {
            end: Number.MAX_VALUE,
            handler: () => {
                setFirstColor(new THREE.Color(primaryRed));
                setSecondColor(new THREE.Color(primaryBlue));
            },
        };
        if (!aboutPos || !spotifyPos || !galleryPos || !contactPos) return [endAnimation];
        return [
            {
                end: aboutPos,
                handler: (progression) => {
                    const initial = new TinyColor(primaryBlue);
                    const target = new TinyColor(primaryRed);
                    const color = initial.mix(target, progression * 100).toHexString();
                    setFirstColor(new THREE.Color(primaryRed));
                    setSecondColor(new THREE.Color(color));
                },
            },
            {
                end: spotifyPos,
                handler: (progression) => {
                    const initial = new TinyColor(primaryRed);
                    const target = new TinyColor(primaryBlue);
                    const color = initial.mix(target, progression * 100).toHexString();
                    setFirstColor(new THREE.Color(primaryRed));
                    setSecondColor(new THREE.Color(color));
                },
            },
            {
                end: galleryPos,
                handler: (progression) => {
                    const initial = new TinyColor(primaryRed);
                    const target = new TinyColor(primaryBlue);
                    const color = initial.mix(target, progression * 100).toHexString();
                    setFirstColor(new THREE.Color(color));
                    setSecondColor(new THREE.Color(primaryBlue));
                },
            },
            {
                end: contactPos,
                handler: (progression) => {
                    const initial = new TinyColor(primaryBlue);
                    const target = new TinyColor(primaryRed);
                    const color = initial.mix(target, progression * 100).toHexString();
                    setFirstColor(new THREE.Color(color));
                    setSecondColor(new THREE.Color(primaryBlue));
                },
            },
            endAnimation,
        ];
    }, [aboutPos, spotifyPos, galleryPos, contactPos, resizeCount]);

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
