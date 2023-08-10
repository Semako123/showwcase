import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "@/components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export const metadata: Metadata = {
	title: "Showwcase - Studentfolio",
	description: "Showwcase react based test",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<StyledComponentsRegistry>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					{children}
				</ThemeProvider>
			</StyledComponentsRegistry>
		</html>
	);
}
