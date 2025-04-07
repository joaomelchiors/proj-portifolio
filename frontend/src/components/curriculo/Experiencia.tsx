const Experiencia = () => {
	return (
		<div
			id="experiencia"
			className="flex flex-col sm:flex-row lg:flex-col items-center justify-around p-6 gap-6 bg-black border border-zinc-800 rounded-2xl"
		>
			<Item principal="~600/year" label="contribuições" />
			<Item principal="+3" label="anos de experiência" />
			<Item principal="890h" label="em aprendizagem" />
		</div>
	);
};

function Item(props: { principal: string; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
			<span className="text-zinc-400 text-sm">{props.label}</span>
		</div>
	);
}

export default Experiencia;
