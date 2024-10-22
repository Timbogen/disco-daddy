import Link from "next/link";

/**
 * The imprint
 */
export default function Imprint() {
    return (
        <main className={"page"}>
            <section className={"text"}>
                <h1>Impressum</h1>
                <Link className={"homeLink"} href={"/"}>
                    {"<"} Home
                </Link>
                <div className={"glass"}>
                    <h2 style={{ marginBottom: 0 }}>Tim Niederer</h2>
                    <p>
                        <br />
                        Karlstra&szlig;e 101
                        <br />
                        89073 Ulm
                        <br />
                        Deutschland
                    </p>
                    <h2>Kontakt</h2>
                    <p>
                        Telefon: 01712089964
                        <br />
                        E-Mail: niederer.tim@gmail.com
                    </p>
                    <p>
                        Quelle:{" "}
                        <a href="https://www.e-recht24.de/impressum-generator.html">
                            https://www.e-recht24.de/impressum-generator.html
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
