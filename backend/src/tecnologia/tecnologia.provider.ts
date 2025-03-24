import { Tecnologia } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class TecnologiaProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterTodas(): Promise<Tecnologia[]> {
		return await this.prisma.tecnolodgia.findMany();
	}

	async obterDestaques(): Promise<Tecnologia[]> {
		return await this.prisma.tecnolodgia.findMany({
			where: {
				highlight: true,
			},
		});
	}
}
