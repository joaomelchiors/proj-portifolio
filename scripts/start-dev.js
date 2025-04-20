import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// metodo para pegar o diretorio principal do usuário
const userFolder = os.homedir();

// recupera o local do arquivo, mas vem o nome do arquivo junto.
const fileFolderWithFileNameExecution = fileURLToPath(import.meta.url);

// remove o nome do arquivo do endereço para termos o diretório
const fileFolderExecution = path.dirname(fileFolderWithFileNameExecution);

const dockerFolder = path.join(fileFolderExecution, "../infra/");

function callScript() {
	try {
		const result = execSync(`docker ps --filter 'name=n8n-n8n-1' --filter 'status=running' --format '{{.Names}}'`)
			.toString()
			.trim();

		if (!result) {
			console.log("n8n container is note running, Starting it...");
			execSync(`docker compose -f ${dockerFolder}docker-compose.yml up -d`, { stdio: "inherit" });
		} else {
			console.log("n8n container is running.");
		}
	} catch (err) {
		console.log("Failed to check or start n8n container", err);
		return;
	}
	execSync('npx concurrently "cd backend && npm run start:dev" "cd frontend && npm run dev"', {
		stdio: "inherit",
	});
}

callScript();
