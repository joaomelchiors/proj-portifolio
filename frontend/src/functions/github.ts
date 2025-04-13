export default async function getReadme(url: string) {
	const repositorio = url.split("github.com/")[1];
	const readmeURL = `https://raw.githubusercontent.com/${repositorio}/main/README.md`;
	const readme = await fetch(readmeURL);

	/*pegando o readme não como markdow e sim como texto*/

	return readme.text();
}
