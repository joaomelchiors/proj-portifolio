import Curriculo from "@/components/curriculo";
import Hero from "@/components/landing/Hero";
import Container from "@/components/shared/Container";
import { getTecnologias } from "@/functions/tecnologias";

export default async function homePage() {
	const tecnologias = await getTecnologias();

	return (
		<>
			<Hero />
			<Container className="py-16">
				<Curriculo tecnologias={tecnologias.all} />
			</Container>
		</>
	);
}
