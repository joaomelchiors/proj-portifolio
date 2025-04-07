import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ProjetoPrisma } from "./projeto.prisma";
import { Projeto } from "@core";

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly projetoPrisma: ProjetoPrisma) {}

	@Get()
	async obterTodos(): Promise<Projeto[]> {
		return await this.projetoPrisma.obterTodos();
	}

	@Get("destaques")
	async obterDestaques(): Promise<Projeto[]> {
		return await this.projetoPrisma.obterDestaques();
	}

	@Get(":id")
	async obterProjeto(@Param("id", ParseIntPipe) id: number): Promise<Projeto | null> {
		return await this.projetoPrisma.obterProjeto(id);
	}
}
