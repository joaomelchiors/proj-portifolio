"use server";

import Mensagem from "@/model/Mensagem";

export default async function chat(chatId: string, mensagem: Mensagem): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBHOOK;

	if (!webhookUrl) {
		console.error("CHAT_WEBHOOK environment variable is not set");
		return null;
	}
	//cuidado usar o atributo certo que é recebido pelo n8n, nesse caso é o "chatId" e o "message"
	try {
		const resposta = await fetch(webhookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chatId,
				message: mensagem.text,
			}),
		});

		if (!resposta.ok) {
			console.error(`Webhook request failed with status: ${resposta.status}`);
			return null;
		}

		const data = await resposta.json();
		return data.response;
	} catch (error) {
		console.error("Error in chat function:", error);
		return null;
	}
}
