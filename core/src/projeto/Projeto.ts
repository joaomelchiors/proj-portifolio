import { Type } from "./Type";
import { Level } from "./Level";
import Tecnologia from "../tecnologia/Tecnologia";

export default interface Projeto {
	id: number;
	name: string;
	description: string;
	imagens: string[];
	level: Level;
	type: Type;
	highlight: boolean;
	repository: string;
	tecnologia: Tecnologia[];
}
