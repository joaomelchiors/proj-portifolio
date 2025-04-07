import Header from "@/components/shared/Header";
import { getProjeto } from "@/functions/projetos";

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params;
	const projeto = await getProjeto(id);

	return projeto ? (
		<div>
			<Header />
			<div className="bg-black">
				<h1>
					{projeto.name} {id}
				</h1>
			</div>
		</div>
	) : null;
};

export default PaginaProjeto;
