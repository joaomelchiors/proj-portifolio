import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const CounteudoMD = ({ markdown }: { markdown: string }) => {
	return (
		<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
			{markdown}
		</Markdown>
	);
};

export default CounteudoMD;
