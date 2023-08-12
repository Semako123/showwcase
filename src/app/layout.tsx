"use client";

import StyledComponentsRegistry from "./registry";
import GlobalStyle from "@/components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { EduContextProvider } from "@/context/userContext";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from "react-modal";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const queryClient = new QueryClient();
	Modal.setAppElement("#app");
	return (
		<html lang="en">
			<head>
				<title>Education Showcase</title>
				<meta name="description" content="Showwcase react based test" />
			</head>
			<body id="app">
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
