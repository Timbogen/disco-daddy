"use client";

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./disco.module.scss";
import { CameraControls } from "@react-three/drei";
import { Ball, DiscoBall } from "@/app/disco/components/disco-ball/disco-ball";
import { Lights } from "@/app/disco/components/lights/lights";
import { Walls } from "./components/walls/walls";

/**
 * The disco background
 */
export const Disco: React.FC = () => {
    const cameraControlRef = useRef<CameraControls | null>(null);

    return (
        <div className={styles.disco}>
            <Canvas>
                <CameraControls ref={cameraControlRef} minZoom={1} maxZoom={10} />
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
            </Canvas>
        </div>
    );
};
