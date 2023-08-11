"use client";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "@/components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { EduContextProvider } from "@/context/userContext";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

export const metadata: Metadata = {
	title: "Showwcase - Studentfolio",
	description: "Showwcase react based test",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const queryClient = new QueryClient();
	return (
		<html lang="en">
			<head>
			</head>
			<body>
				<StyledComponentsRegistry>
					<ThemeProvider theme={theme}>
						<QueryClientProvider client={queryClient}>
							<EduContextProvider>
								<GlobalStyle />
								{children}
							</EduContextProvider>
						</QueryClientProvider>
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
