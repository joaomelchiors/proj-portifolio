import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Menu from "./Menu";

const Header = () => {
	return (
		<header className="w-full flex items-center h-16 bg-black/50">
			{/*'flex-1 porque ao colocar o container dentro do header, 
            ele fica centralizado, pois o espaço dele fica limitado ao tamanho do seu conteúdo*/}
			<Container className="flex-1 flex justify-between items-center">
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.svg" alt="logo" width={80} height={0} />
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:flex items-center gap-2">
					<Link
						href="https://www.linkedin.com/in/joaomelchiros/"
						target="_blank"
						className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
					>
						Pefil
					</Link>
				</div>
			</Container>
		</header>
	);
};

export default Header;
