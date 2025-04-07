import { Projeto } from "@core";
import Link from "next/link";
import Image from "next/image";
export interface ItemProjetosProps {
	projeto: Projeto;
}

export default function ItemProjetos({ projeto }: ItemProjetosProps) {
	return (
		<Link href={`/projeto/${projeto.id}`}>
			<div
				className="
                relative
                rounded-2xl overflow-hidden border border-zinc-800
                min-w-64 min-h-64"
			>
				<Image src={projeto.imagens[0]} alt={projeto.name} fill className="object-cover" />
			</div>
		</Link>
	);
}
