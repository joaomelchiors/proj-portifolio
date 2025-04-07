import { Projeto, Type } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProjetoPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodos(): Promise<Projeto[]> {
		const projetos = await this.prisma.project.findMany({ include: { tecnologias: true } });
		return projetos.map((projeto) => ({
			...projeto,
			type: projeto.type as Type, // Conversão explícita
		}));
	}

	async obterDestaques(): Promise<Projeto[]> {
		const projetos = await this.prisma.project.findMany({
			where: { highlight: true },
			include: { tecnologias: true },
		});
		return projetos.map((projeto) => ({
			...projeto,
			type: projeto.type as Type, // Conversão explícita
		}));
	}

	async obterProjeto(id: number): Promise<Projeto | null> {
		const projeto = await this.prisma.project.findUnique({
			where: { id },
			include: { tecnologias: true },
		});

		if (!projeto) {
			return null;
		}

		return {
			...projeto,
			type: projeto.type as Type, // Conversão explícita
		};
	}
}
