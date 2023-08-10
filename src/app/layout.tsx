import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";

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
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</html>
	);
}
