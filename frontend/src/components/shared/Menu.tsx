"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
	const route = usePathname();
	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selected={route === "/"} newTab={false}>
				Início
			</MenuItem>
			<MenuItem href="/projeto/1" selected={route.startsWith("/projeto")} newTab={false}>
				Projetos
			</MenuItem>
			<MenuItem
				href="https://api.whatsapp.com/send/?phone=5561983154053&text&type=phone_number"
				selected={false}
				newTab={true}
			>
				Contatos
			</MenuItem>
		</nav>
	);
};

function MenuItem(props: { href: string; children: React.ReactNode; selected: boolean; newTab: boolean }) {
	return (
		<Link href={props.href} target={props.newTab ? "_blank" : "_self"}>
			<span
				className={`flex item-center gap-2 text-sm border-red-600 hover:text-white 
                ${props.selected ? "border-b-4 text-white" : "text-zinc-400"}`}
			>
				{" "}
				{props.children}
			</span>
		</Link>
	);
}

export default Menu;
