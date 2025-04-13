"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
	const [valor, setValor] = useState<T>(() => {
		const valorLocal = localStorage.getItem(key);
		return valorLocal ? JSON.parse(valorLocal) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(valor));
	}, [key, valor]);

	return [valor, setValor] as const;
}
