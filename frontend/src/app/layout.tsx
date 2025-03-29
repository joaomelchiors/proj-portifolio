import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist",
});

export const metadata: Metadata = {
	title: "Protifolio - JoaoMelchiros",
	description: "Portifólio de projetos de desenvolvimento",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} antialiased`}>{children}</body>
		</html>
	);
}
