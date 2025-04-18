"use client";

import Image from "next/image";
import useChat from "@/hooks/useChat";
import { useState } from "react";
import CounteudoMD from "@/components/shared/CounteudoMD";

export default function Chat() {
	const { chatId, messages, thinking, addMessage, clearMensagens } = useChat();
	const [text, setText] = useState<string>("");

	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<button onClick={clearMensagens}>Limpar</button>
			<ul>
				{messages.map((message) => (
					<li key={message.id} className="flex gap-2">
						<div>{message.autor}:</div>
						<CounteudoMD markdown={message.text} />
					</li>
				))}
			</ul>
			{thinking && (
				<div>
					<Image src="/pensando.gif" alt="Pensando" width={50} height={50} />
				</div>
			)}
			<input
				type="text"
				value={text}
				className="border border-gray-700 rounded p-2"
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						addMessage(text);
						setText("");
					}
				}}
			/>
		</div>
	);
}
