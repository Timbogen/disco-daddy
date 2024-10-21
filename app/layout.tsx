import type { Metadata } from "next";
import localFont from "next/font/local";
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
    description: "Enjoy your musical journey with the legendary disco daddy!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${galada.variable}`}>{children}</body>
        </html>
    );
}
