import { Tecnologia } from "@core";
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas";
import Experiencia from "./Experiencia";
import MiniCV from "./MiniCV";

export interface CurriculoProps {
	tecnologias: Tecnologia[];
}

export default function Curriculo(props: CurriculoProps) {
	return (
		<div id="curriculo" className="flex flex-col lg:flex-row gap-4 min-h-72 w-7/10 md:w-11/12 xl:w-full">
			<MiniCV />
			<Experiencia />
			<TecnologiasTrabalhadas tecnologias={props.tecnologias} />
		</div>
	);
}
