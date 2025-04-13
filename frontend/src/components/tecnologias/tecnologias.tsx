import { Tecnologia } from "@core";
import Image from "next/image";

const tecnologias = ({ tecnologias, tamanhoMenor = false }: { tecnologias: Tecnologia[]; tamanhoMenor?: boolean }) => {
	return (
		<div className="flex justify-center gap-4 flex-wrap w-full">
			{tecnologias.map((tecnologia) => (
				<div key={tecnologia.id} className="flex flex-col items-center gap-1">
					<span
						className={`relative h-11 w-11 rounded-xl overflow-hidden
						${!tamanhoMenor && "sm:h-16 sm:w-16"}
						`}
					>
						<Image src={tecnologia.imagen} alt={tecnologia.name} fill className="object-contain" />
					</span>
					<span className="text-[10px] text-zinc-400">{tecnologia.name}</span>
				</div>
			))}
		</div>
	);
};

export default tecnologias;
