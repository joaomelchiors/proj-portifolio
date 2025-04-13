import React from "react";
import CounteudoMD from "../shared/CounteudoMD";

const Readme = ({ markdown }: { markdown: string }) => {
	return (
		<div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl">
			{/* class do taillwind-typography -> dependencia instalada */}
			<div className="prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
				<CounteudoMD markdown={markdown} />
			</div>
		</div>
	);
};

export default Readme;
