import ButtonChat from "@/components/chat/ButtonChat";

const layoutPages = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-screen">
			{children}
			<ButtonChat />
		</div>
	);
};

export default layoutPages;
