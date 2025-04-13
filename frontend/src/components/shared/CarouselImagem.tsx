import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export interface CarouselImagemProps {
	imagens: string[];
}

const CarouselImagem = (props: CarouselImagemProps) => {
	return (
		<Carousel id="CarouselImagem" opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imagens.map((imagem, index) => (
					<CarouselItem key={index} className="relative h-96 w-full">
						<Image src={imagem} alt={"imagem"} fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default CarouselImagem;
