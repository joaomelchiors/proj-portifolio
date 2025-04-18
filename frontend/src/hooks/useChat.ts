import chat from "@/functions/chat";
import useLocalStorage from "./useLocalStorage";
import Mensagem from "@/model/Mensagem";
import { Id } from "@core";
import { useState } from "react";

/* 
	Por que não colocar as chamadas para o n8n direto do hook?
	Porque ao fazer isso, estaremos expondo na aplicação o endereço do webHook. 
	Nesse sentido, deve-se usar a url dentro de um hash e não tronar a "env" pública.
	Chaves no arquivo .env que não começam com "NEXT_PUBLIC" não são exposta nmo forntend
*/

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.generate());
	const [messages, setMessages] = useLocalStorage<Mensagem[]>("mensagens", []);
	const [thinking, setThinking] = useState<boolean>(false);

	async function addMessage(text: string): Promise<void> {
		try {
			setThinking(true);

			const newMensagem: Mensagem = {
				id: Id.generate(),
				text,
				autor: "Visitante",
				lado: "direito",
			};

			setMessages((msgs) => [...msgs, newMensagem]);
			// setMensagens([...mensagens, newMensagem]);

			const resposta = await chat(chatId, newMensagem);

			if (!resposta) return;

			const mensagensResposta: Mensagem = {
				id: Id.generate(),
				text: resposta,
				autor: "Assistente",
				lado: "esquerdo",
			};
			setMessages((msgs) => [...msgs, mensagensResposta]);
		} finally {
			setThinking(false);
		}
	}

	function clearMensagens() {
		setMessages([]);
	}

	return {
		chatId,
		messages,
		thinking,
		addMessage,
		clearMensagens,
	};
}
