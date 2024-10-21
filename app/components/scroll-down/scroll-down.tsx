"use client";

import React from "react";
import styles from "./scroll-down.module.scss";
import { useProgress } from "@react-three/drei";

/**
 * The scroll down indicator
 */
export const ScrollDown: React.FC = () => {
    const { progress } = useProgress();
    if (progress < 100) return <></>;
    return <div className={styles.scrollDown}></div>;
};
