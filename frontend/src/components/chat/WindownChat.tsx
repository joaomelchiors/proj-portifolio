"use client";

import { IconMessages, IconReload, IconSend } from "@tabler/icons-react";
import useChat from "@/hooks/useChat";
import { useEffect, useRef, useState } from "react";
import BalloonChat from "./BalloonChat";
import Image from "next/image";

const WindownChat = () => {
	const { messages, thinking, addMessage, clearMensagens } = useChat();
	const [text, setText] = useState("");
	const scrollOnButton = useRef<HTMLDivElement>(null);

	useEffect(() => {
		scrollOnButton.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	function sendMessage() {
		addMessage(text);
		setText("");
	}
	return (
		<div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
			<div id="HeaderWindowChat" className="flex justify-between items-center bg-white p-4">
				<h2 className="text-xl font-bold">Olá Visitante</h2>
				<IconReload size={24} onClick={clearMensagens} className="text-black cursor-pointer" />
			</div>
			{messages.length === 0 ? (
				<div
					id="MessageAreaEmpty"
					className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px]"
				>
					<IconMessages size={230} stroke={0.2} className="text-black/30" />
					<span>Vamos conversar?</span>
				</div>
			) : (
				<div
					id="MessageAreaNotEmpty"
					className="flex flex-col min-h-[400px] sm:min-h-[500px] p-2 gap-2 max-h-[400px] sm:max-h-[500px] overflow-y-scroll"
				>
					{messages.map((message, i) => {
						// verificar se mensagem anterior é do mesmo autor
						const sameAuthor = i > 0 && messages[i - 1].autor === message.autor;
						return <BalloonChat key={message.id} message={message} dismissAuthor={sameAuthor} />;
					})}
					{thinking && <Image src="/pensando.gif" alt="Pensando" width={50} height={50} />}
					<div ref={scrollOnButton} />
				</div>
			)}

			<div className="h-px bg-zinc-400 mt-04" />
			<div id="InputArea" className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white">
				<input
					id="InputField"
					type="text"
					value={text}
					className="flex-1 bg-transparent h-8 outline-none pl-3"
					onChange={(e) => setText(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							sendMessage();
						}
					}}
				/>
				<button
					onClick={sendMessage}
					className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500"
				>
					<IconSend className="text-white" size={18} />
				</button>
			</div>
		</div>
	);
};

export default WindownChat;
