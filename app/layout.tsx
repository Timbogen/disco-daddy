import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Poppins, Galada } from "next/font/google";
import "./styles/globals.scss";

/** The poppins font */
const poppins = Poppins({
    weight: ["200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

/** The galada font */
const galada = Galada({ weight: ["400"], subsets: ["latin"], variable: "--font-galada" });

export const metadata: Metadata = {
    title: "Disco Daddy",
    description: "Genießen Sie ihre musikalische Wunderreise mit DiscoDaddy!",
};

/** Completely prevent SSR for the three js stuff */
const Disco = dynamic(() => import("@/app/disco/disco"), {
    ssr: false,
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${galada.variable}`}>
                <Disco />
                {children}
                <footer>
                    © DiscoDaddy {new Date().getFullYear()}
                    <span>•</span>
                    <Link href={"/legal/imprint"}>Impressum</Link>
                    <span>•</span>
                    <Link href={"/legal/privacy"}>Datenschutzerklärung</Link>
                </footer>
            </body>
        </html>
    );
}
