"use client";

import styles from "./page.module.scss";
import { ScrollDown } from "@/app/components/scroll-down/scroll-down";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { Gallery } from "@/app/components/gallery/gallery";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

/** The title */
const title = "Disco Daddy";

/** Completely prevent SSR for the three js stuff */
const Disco = dynamic(() => import("@/app/disco/disco"), {
    ssr: false,
});

/**
 * The home page
 */
export default function Home() {
    const { progress } = useProgress();
    const [showBorders, setShowBorders] = useState(false);

    /** Make the scene visible once */
    useEffect(() => {
        if (progress >= 100) setShowBorders(true);
    }, [progress]);

    return (
        <div className={clsx(styles.page, showBorders ? "" : styles.initialPage)}>
            <main className={styles.main}>
                <Disco />
                <section className={styles.intro}>
                    <h1>
                        {title.split("").map((c, index) => (
                            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                {c}
                            </span>
                        ))}
                    </h1>
                    <ScrollDown />
                </section>
                <section className={styles.about}>
                    <h2>Daddy?</h2>
                    <h2>Who the fuck is Daddy?</h2>
                    <div className={styles.grid}>
                        <div className={clsx("glass", styles.image)}>
                            <img alt={"Father And Son"} src={"/img/dd.png"} />
                        </div>
                        <div className={clsx("glass", styles.description)}>
                            <h3>"Darfsch mi au Georg nenna"</h3>
                            Georg ist die Disco-Größe schlechthin. Das ganze Schwabenland hat bereits zu seinen Grooves
                            getanzt!
                        </div>
                        <div className={clsx("glass", styles.third)}>"Darfsch mi au Georg nenna"</div>
                        <div className={clsx("glass", styles.fourth)}>"Darfsch mi au Georg nenna"</div>
                    </div>
                </section>
                <section className={styles.spotify}>
                    <h2>DiscoDaddy für zu Hause</h2>
                    <div className={clsx("glass", styles.panel)}>
                        <iframe
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            src="https://open.spotify.com/embed/playlist/5zD1Omh2VmrNGsKeB8gfob?utm_source=generator&amp;theme=0"
                        ></iframe>
                    </div>
                </section>
                <section className={styles.target}>
                    <h2>DiscoDaddy Gallerie</h2>
                    <Gallery />
                </section>
            </main>
        </div>
    );
}
