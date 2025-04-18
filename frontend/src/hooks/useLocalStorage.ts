"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
	//passando como valor inicial do useState uma arrowfunction
	const [value, setValue] = useState<T>(() => {
		const localValue = localStorage.getItem(key);
		return localValue ? JSON.parse(localValue) : initialValue;
	});

	//o useEffect estará sempre salvando o localStorage, sempre que os atrivos chave e valor forem modificados
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as const;
}
