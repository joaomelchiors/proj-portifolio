import { Tecnologia } from "@core";
import Header from "../shared/Header";
import Tecnologias from "../tecnologias/tecnologias";

export interface HeroProps {
	tecnologias: Tecnologia[];
}

const Hero = (props: HeroProps) => {
	return (
		<div
			className="flex flex-col items-center justify-center bg-[url('/principal.jpg')]
            h-[500px] bg-cover bg-center
        "
		>
			<Header />
			<div className="flex-1 flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 rounded-full bg-red-500"></span>
						<span className="text-3xl sm:text-5xl font-bold text-center">João Melchiors</span>
						<span className="w-2 h-2 rounded-full bg-red-500"></span>
					</h1>
					<h2 className="text-zinc-500 text-center">Entusiasta em TI</h2>
				</div>
				<Tecnologias tecnologias={props.tecnologias} />
			</div>
		</div>
	);
};

export default Hero;
