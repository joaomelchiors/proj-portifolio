import Curriculo from "@/components/curriculo";
import Hero from "@/components/landing/Hero";
import Projetos from "@/components/projetos/Projetos";
import Container from "@/components/shared/Container";
import { getTecnologias } from "@/functions/tecnologias";
import { getProjetos } from "@/functions/projetos";

// intervalo de tempo que faz a página ir no backend é atualizar
export const revalidate = 3600;

export default async function homePage() {
	const tecnologias = await getTecnologias();
	const projetos = await getProjetos();

	return (
		<>
			<Hero tecnologias={tecnologias.destaques} />
			<Container className="py-16 flex flex-col items-center gap-10">
				<Projetos titulo="Destaque" arrayProjetos={projetos.highlight} />
				<Projetos titulo="Web" arrayProjetos={projetos.web} />
				<Projetos titulo="Mobile" arrayProjetos={projetos.mobile} />
				<Projetos titulo="Jogos" arrayProjetos={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.all} />
			</Container>
		</>
	);
}
