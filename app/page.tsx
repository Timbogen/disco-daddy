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
                        <div className={styles.info}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#e8eaed"
                            >
                                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                            </svg>
                            Georg Schmid, 60 Jahre alt
                        </div>
                        <div className={styles.info}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#e8eaed"
                            >
                                <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                            </svg>
                            <div>
                                Georg ist die Disco-Größe schlechthin. Das ganze Schwabenland hat bereits zu seinen
                                Grooves getanzt! Außerdem hat er sich bereits um seinen würdigen Nachfolger gekümmert:{" "}
                                <a href={"http://mattleymusic.de"} target={"_blank"}>
                                    MattleyMusic!
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={clsx("glass", styles.third)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M9.473 6.57c-1.272.596-2.299 1.623-2.895 2.895l-1.041-.13c.709-1.721 2.084-3.097 3.807-3.807l.129 1.042zm-.26-2.077l-.127-1.019c-2.625.902-4.697 2.978-5.592 5.606l1.02.127c.806-2.174 2.529-3.9 4.699-4.714zm2.787 11.507c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm2-4c0-1.103-.896-2-2-2s-2 .897-2 2 .896 2 2 2 2-.897 2-2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12c6.63 0 12 5.396 12 12zm-2 0c0-.23-.02-.456-.034-.682-.501 1.729-1.453 3.198-2.361 4.137l-1.438-1.391c1.151-1.19 2.396-3.442 2.115-5.867-.219-1.889-1.344-3.524-3.325-4.871-1.463-.839-3.153-1.326-4.957-1.326-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10zm-7.358 5.267l1.881 1.832 2.639-2.678-1.88-1.834-2.64 2.68z" />
                        </svg>
                        <h3>Disco & Dance</h3>
                        <p>Lieblingsgenre</p>
                    </div>
                    <div className={clsx("glass", styles.fourth)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
                        </svg>
                        <h3>Ulm & Umgebung</h3>
                        <p>Tatort</p>
                    </div>
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
                <h2>Sag DiscoDaddy „Hallo“</h2>
                <Contact />
            </section>
        </main>
    );
}
