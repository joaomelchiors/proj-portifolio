import { Tecnologia } from "@core";

const TecnologiasTrabalhadas = ({ tecnologias }: { tecnologias: Tecnologia[] }) => {
	return tecnologias ? (
		<div
			id="tecnologiaTrabalhadas"
			className="flex justify-center items-center 
        p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl"
		>
			<div className="flex justify-center gap-x-3 flex-wrap ">
				{tecnologias.map((tecnologia) => (
					<div key={tecnologia.id}>
						<span className="text-red-500 font-bold">#</span>
						<span>{tecnologia.name}</span>
					</div>
				))}
			</div>
		</div>
	) : (
		<div>Não há tecnologias</div>
	);
};

export default TecnologiasTrabalhadas;
