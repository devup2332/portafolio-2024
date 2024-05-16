"use client";
import useStore from "@/store";
import React, { useEffect } from "react";

interface ThemeProviderProp {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProp) => {
	const theme = useStore((state) => state.theme);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (!theme) localStorage.setItem("theme", "light");
	}, []);
	return (
		<div id="main-container" className={theme}>
			{children}
		</div>
	);
};

export default ThemeProvider;
