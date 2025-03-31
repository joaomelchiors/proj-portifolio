import Header from "@/components/shared/Header";

const PaginaProjeto = async (props: { params: Promise<{ id: string }> }) => {
	const { id } = await props.params;
	return (
		<div>
			<Header />
			<div className="bg-black">
				<h1>Projeto {id}</h1>
			</div>
		</div>
	);
};

export default PaginaProjeto;
