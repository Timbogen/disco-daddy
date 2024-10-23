import type { Metadata } from "next";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./styles/globals.scss";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const galada = localFont({
    src: "./fonts/galada/Galada-Regular.ttf",
    variable: "--font-galada",
    weight: "400",
});

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
            <body className={`${geistSans.variable} ${geistMono.variable} ${galada.variable}`}>
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
