import React from "react";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import WindownChat from "./WindownChat";

const buttonChat = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="fixed bottom-5 right-5 cursor-pointer">
					<Image src="/chat.svg" alt="Chat" width={50} height={50} />
				</div>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={10}
				className="w-[400px] sm:w-[500px]"
				style={{ backgroundColor: "transparent", border: "none" }}
			>
				<WindownChat />
			</PopoverContent>
		</Popover>
	);
};

export default buttonChat;
