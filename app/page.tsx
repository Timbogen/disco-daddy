"use client";

import styles from "./page.module.scss";
import { ScrollDown } from "@/app/components/scroll-down/scroll-down";
import clsx from "clsx";
import { Gallery } from "@/app/components/gallery/gallery";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Contact } from "@/app/components/contact/contact";

/** The title */
const title = "Disco Daddy";

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
        <main className={clsx("page", showBorders ? "" : styles.initialPage)}>
            <section className={styles.intro}>
                <h1>
                    {title.split("").map((c, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            {c}
                        </span>
                    ))}
                </h1>
                <h2>Der DJ für echte Musik</h2>
                <ScrollDown />
            </section>
            <section id={"about"} className={styles.about}>
                <h2>Daddy?</h2>
                <h2>Who the fuck is Daddy?</h2>
                <div className={styles.grid}>
                    <div className={clsx("glass", styles.image)}>
                        <img alt={"Father And Son"} src={"/img/dd.png"} />
                    </div>
                    <div className={clsx("glass", styles.description)}>
                        <h3>„Darfsch mi au Georg nenna“</h3>
                        Georg ist die Disco-Größe schlechthin. Das ganze Schwabenland hat bereits zu seinen Grooves
                        getanzt!
                    </div>
                    <div className={clsx("glass", styles.third)}>"Darfsch mi au Georg nenna"</div>
                    <div className={clsx("glass", styles.fourth)}>"Darfsch mi au Georg nenna"</div>
                </div>
            </section>
            <section id={"spotify"} className={styles.spotify}>
                <h2>DiscoDaddy für zu Hause</h2>
                <div className={clsx("glass", styles.panel)}>
                    <iframe
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        src="https://open.spotify.com/embed/playlist/5zD1Omh2VmrNGsKeB8gfob?utm_source=generator&amp;theme=0"
                    ></iframe>
                </div>
            </section>
            <section id={"gallery"} className={styles.gallery}>
                <h2>DiscoDaddy Gallerie</h2>
                <Gallery />
            </section>
            <section id={"contact"} className={styles.contact}>
                <h2>Sagen Sie DiscoDaddy „Hallo“</h2>
                <Contact />
            </section>
        </main>
    );
}
