import Mensagem from "@/model/Mensagem";
import CounteudoMD from "../shared/CounteudoMD";
import { IconRobot } from "@tabler/icons-react";

export interface BalloonChatProps {
	message: Mensagem;
	dismissAuthor?: boolean;
}

const BalloonChat = (props: BalloonChatProps) => {
	return props.message.lado === "esquerdo" ? <LeftBalloon {...props} /> : <RightBalloon {...props} />;
};

function LeftBalloon(props: BalloonChatProps) {
	return (
		<div id="LeftArea" className="flex gap-4">
			{!props.dismissAuthor && <IconRobot size={40} />}
			<div id="LeftAreaText" className={`flex flex-col ${props.dismissAuthor && "pl-16"}`}>
				{!props.dismissAuthor && (
					<span id="LeftAutor" className="text-xs text-zinc-600">
						{props.message.autor}
					</span>
				)}
				<div
					id="LeftAreaBalloon"
					className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl"
				>
					<CounteudoMD markdown={props.message.text} />
				</div>
			</div>
		</div>
	);
}

function RightBalloon(props: BalloonChatProps) {
	return (
		<div id="RightArea" className="flex flex-col items-end">
			{!props.dismissAuthor && (
				<span id="RigthAuthor" className="text-xs text-zinc-600">
					{props.message.autor}
				</span>
			)}
			<div id="RightAreaBalloon" className="bg-red-500 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
				<CounteudoMD markdown={props.message.text} />
			</div>
		</div>
	);
}

export default BalloonChat;
