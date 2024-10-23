import { Ball, DiscoBall } from "@/app/disco/components/disco-ball/disco-ball";
import React, { useEffect, useState } from "react";
import { useDebouncedResize } from "@/app/util";

/**
 * The disco balls
 */
export const Balls: React.FC = () => {
    const [scale, setScale] = useState(1);
    const resizeCount = useDebouncedResize();

    useEffect(() => {
        if (window.innerWidth < 500) setScale(0.5);
        else if (window.innerWidth < 700) setScale(0.7);
        else setScale(1);
    }, [resizeCount]);

    return (
        <mesh scale={scale}>
            <DiscoBall />
            <Ball position={[-3, 0.5, 0]} scale={0.2} />
            <Ball position={[-2, 0.8, 0]} scale={0.08} />
            <Ball position={[-2.5, 1.5, 0]} scale={0.15} />
            <Ball position={[-2.4, -0.3, 0]} scale={0.13} />
            <Ball position={[2.8, 0.7, 0]} scale={0.23} />
            <Ball position={[2.4, -1.2, 0]} scale={0.17} />
            <Ball position={[2, -0.2, 0]} scale={0.12} />
            <Ball position={[3.4, -0.4, 0]} scale={0.15} />
        </mesh>
    );
};
