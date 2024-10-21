import styles from "./page.module.scss";
import { Disco } from "@/app/disco/disco";

/**
 * The home page
 */
export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Disco />
                <h1 className={styles.title}>DiscoDaddy</h1>
            </main>
            <footer className={styles.footer}>Test</footer>
        </div>
    );
}
