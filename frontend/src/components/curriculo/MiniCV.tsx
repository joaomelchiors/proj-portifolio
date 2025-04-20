import Image from "next/image";

export default function MiniCV() {
	return (
		<div
			id="miniCV"
			className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row bg-black border border-zinc-800 rounded-2xl px-6 pt-6"
		>
			<div id="fillDaImagem" className="relative min-w-64 h-64 self-center">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						id="curriculoName"
						className="text-2xl font-bold"
						style={{
							background: "linear-gradient(to right, #ef4444 30%, #ffffff 60%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}
					>
						João Marcos Melchiors
					</span>
					<span>Bacharel em Sistema de Informação</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					20 anos como servidor da Secretaria de Estado de Educação do Distrito Federal, tendo iniciado sua
					carreira como Técnico de Computador, logo após atuou com rede estruturada, foi Coordenador de
					Suporte em Informática na Regional de Taguatinga e hoje é consultor técnico no desenvolvimento e
					implementação do CartãoPDAF no Distrito Federal.
				</p>
			</div>
		</div>
	);
}
