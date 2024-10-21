"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./disco.module.scss";
import { Ball, DiscoBall } from "@/app/disco/components/disco-ball/disco-ball";
import { Lights } from "@/app/disco/components/lights/lights";
import { Walls } from "./components/walls/walls";
import { Camera } from "three";
import { AnimationScript, easeInOut, executeAnimation } from "@/app/util";
import { useProgress } from "@react-three/drei";

/**
 * The disco background
 */
export default () => {
    const [camera, setCamera] = useState<Camera>();
    const { progress } = useProgress();
    const [opacity, setOpacity] = useState(0);

    /** Make the scene visible once */
    useEffect(() => {
        if (progress >= 100) setOpacity(1);
    }, [progress]);

    /** The scroll animations for the light */
    const height = window.innerHeight;
    const animations: AnimationScript[] = useMemo(
        () => [
            {
                start: 0,
                end: height,
                handler: (progression) => {
                    if (camera) camera.rotation.y = easeInOut(progression) * 0.4;
                },
            },
            {
                start: height,
                end: 2 * height,
                handler: (progression) => {
                    if (camera) camera.position.z = 5 + easeInOut(progression) * 3;
                },
            },
            {
                start: 2 * height,
                end: 3 * height,
                handler: (progression) => {
                    if (camera) camera.position.z = 8 + easeInOut(progression) * 3;
                },
            },
        ],
        [height, camera],
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

    return (
        <div className={styles.disco} style={{ opacity }}>
            <Canvas
                onCreated={(state) => {
                    setCamera(state.camera);
                }}
            >
                <Suspense fallback={null}>
                    <Lights />
                    <Walls />
                    <DiscoBall />
                    <Ball position={[-3, 0.5, 0]} scale={0.2} />
                    <Ball position={[-2, 0.8, 0]} scale={0.08} />
                    <Ball position={[-2.5, 1.5, 0]} scale={0.15} />
                    <Ball position={[-2.4, -0.3, 0]} scale={0.13} />
                    <Ball position={[2.8, 0.7, 0]} scale={0.23} />
                    <Ball position={[2.4, -1.2, 0]} scale={0.17} />
                    <Ball position={[2, -0.2, 0]} scale={0.12} />
                    <Ball position={[3.4, -0.4, 0]} scale={0.15} />
                </Suspense>
            </Canvas>
        </div>
    );
};
