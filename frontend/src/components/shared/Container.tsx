import React from "react";

export interface ContainerProps {
	className?: string;
	children: React.ReactNode;
}

//fazer um container para definirmos uma largura máxima, usaalmente utilizado em landing pages
const Container = (props: ContainerProps) => {
	return <div className={`max-w-7xl mx-auto px-4 ${props.className}`}>{props.children}</div>;
};

export default Container;
