import CarouselImagem from "@/components/shared/CarouselImagem";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";
import Tecnologias from "@/components/tecnologias/tecnologias";
import { getProjeto } from "@/functions/projetos";

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params;
	const projeto = await getProjeto(id);

	return projeto ? (
		<div className="bg-black">
			<Header />
			<Container className="py-7 flex flex-col gap-10">
				<h1 className="text-3xl font-bold">
					{projeto.name} {id}
				</h1>
				{/* slice é para tirar o primeiro item do array */}
				<div className="flex flex-col items-center gap-4">
					<CarouselImagem imagens={projeto.imagens.slice(1)} />
					<Tecnologias tecnologias={projeto.tecnologias} tamanhoMenor={true} />
				</div>
			</Container>
		</div>
	) : null;
};

export default PaginaProjeto;
