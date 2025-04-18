export default interface Mensagem {
	id: string;
	text: string;
	autor: string;
	lado: "esquerdo" | "direito";
}
