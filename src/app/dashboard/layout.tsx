import Aside from "@/components/Aside";

export default function DashboardLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { name: string };
}) {
	return (
		<div>
			<Aside/>
			<section>{children}</section>
		</div>
	);
}
