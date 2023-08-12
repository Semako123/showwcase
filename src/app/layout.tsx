"use client";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "@/components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { EduContextProvider } from "@/context/userContext";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";

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
	Modal.setAppElement("#app");
	return (
		<html lang="en">
			<head></head>
			<body id="app">
				<StyledComponentsRegistry>
					<ThemeProvider theme={theme}>
						<QueryClientProvider client={queryClient}>
							<EduContextProvider>
								<GlobalStyle />
								<ToastContainer />
								{children}
							</EduContextProvider>
						</QueryClientProvider>
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
