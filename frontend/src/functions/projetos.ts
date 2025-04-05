import { Projeto, Type } from "@core";
import { httpGet } from "./api";

export async function getProjetos() {
	const projetos: Projeto[] = await httpGet("/projetos");

	return {
		todos: projetos,
		get mobile() {
			return projetos.filter((projeto) => projeto.type === Type.MOBILE);
		},
		get web() {
			return projetos.filter((projeto) => projeto.type === Type.WEB);
		},
		get jogos() {
			return projetos.filter((projeto) => projeto.type === Type.JOGO);
		},
		get highlight() {
			return projetos.filter((projeto) => projeto.highlight);
		},
	};
}

export async function getProjeto(id: string): Promise<Projeto | null> {
	return await httpGet(`/projetos/${id}`);
}
