import type {Metadata} from "next";
import {Barlow_Condensed, Inter} from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["700", "800"],
	variable: "--font-barlow",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Your Next Festival",
	description:
		"The all-in-one platform for discovering, planning, and managing the UK's best music festivals.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang="en"
			className={`${barlowCondensed.variable} ${inter.variable}`}>
			<body style={{fontFamily: "var(--font-inter), Inter, sans-serif"}}>
				{children}
			</body>
		</html>
	);
}
