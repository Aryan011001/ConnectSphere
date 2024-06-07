import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@/components/layout/LeftSideBar";
import MainContainer from "@/components/layout/MainContainer";
import RightSideBar from "@/components/layout/RightSideBar";
import BottomBar from "@/components/layout/BottomBar";

// Metadata for the HTML document
export const metadata = {
	title: "Social Media",
	description: "Next 14 social media app"
};

// Initializing the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<head>
					<title>{metadata.title}</title>
					<meta name="description" content={metadata.description} />
				</head>
				<body className={`${inter.className} bg-purple-2 text-light-1`}>
					<main className="flex flex-row">
						<LeftSideBar />
						<MainContainer>
							{children}
						</MainContainer>
						<RightSideBar />
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	);
}
