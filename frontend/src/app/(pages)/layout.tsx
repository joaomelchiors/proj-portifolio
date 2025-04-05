import ButtonChat from "@/components/chat/ButtonChat";

const layoutPages = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-full">
			{children}
			<ButtonChat />
		</div>
	);
};

export default layoutPages;
