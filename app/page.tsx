import styles from "./page.module.scss";
import { ScrollDown } from "@/app/components/scroll-down/scroll-down";
import dynamic from "next/dynamic";

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
    return (
        <div className={styles.page}>
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
                </section>
                <section className={styles.about}>
                    <h2>Daddy?</h2>
                    <h2>Who the fuck is Daddy?</h2>
                </section>
                <section className={styles.target}>
                    <h2>Daddy?</h2>
                    <h2>Who the fuck is Daddy?</h2>
                </section>
            </main>
            <footer className={styles.footer}>Test</footer>
        </div>
    );
}
