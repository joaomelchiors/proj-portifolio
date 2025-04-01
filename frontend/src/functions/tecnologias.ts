import { Tecnologia } from "@core";
import { httpGet } from "./api";

export async function getTecnologias() {
	const tecnologias: Tecnologia[] = await httpGet("/tecnologias");

	return {
		all: tecnologias,
		get destaques() {
			return tecnologias.filter((tecnologia) => tecnologia.highlight);
		},
	};
}
