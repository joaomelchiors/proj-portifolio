//funcao responsavel por fazer uma requisição get para a api
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet(url: string) {
	const response = await fetch(normalizeUrl(`${baseURL}/${url}`));
	return response.json();
}

function normalizeUrl(url: string) {
	const protocolo = url.split("://")[0];
	const restante = url.split("://")[1];
	return `${protocolo}://${restante.replaceAll(/\/{2,}/g, "/")}`;
}
