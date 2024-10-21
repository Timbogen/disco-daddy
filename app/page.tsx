import styles from "./page.module.scss";
import { Disco } from "@/app/disco/disco";
import { ScrollDown } from "@/app/components/scroll-down/scroll-down";

/**
 * The home page
 */
export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Disco />
                <section className={styles.intro}>
                    <h1>DiscoDaddy</h1>
                    <ScrollDown />
                </section>
                <section className={styles.about}>
                    <h2>Daddy?</h2>
                    <h2>Who the fuck is Daddy?</h2>
                    <ScrollDown />
                </section>
            </main>
            <footer className={styles.footer}>Test</footer>
        </div>
    );
}
