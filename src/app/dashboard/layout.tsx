"use client";
import Aside from "@/components/Aside";
import { useEduContext } from "@/context/userContext";
import StyledButton from "@/components/styles/Button.styles";
import { useState } from "react";
import AddEducation from "@/components/AddEducation";
import StyledLayout from "@/components/styles/Layout.styles";
import StyledSection from "@/components/styles/Section.style";
import StyledHeader from "@/components/styles/Header.styles";
import { EduCard } from "@/components/styles/EduInfo.styles";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { name } = useEduContext()!;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<StyledLayout>
			<Aside />
			<StyledSection>
				<StyledHeader>
					<h5>
						Welcome to <span>{name}&apos;s</span> Education{" "}
						<span>Showcase</span>
					</h5>
					<StyledButton
						onClick={() => {
							setIsOpen(true);
						}}>
						Add New Education
					</StyledButton>
				</StyledHeader>
				<AddEducation setIsOpen={setIsOpen} isOpen={isOpen} />
				<EduCard>{children}</EduCard>
			</StyledSection>
		</StyledLayout>
	);
}
