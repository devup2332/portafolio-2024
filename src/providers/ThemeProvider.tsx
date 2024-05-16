"use client";
import useStore from "@/store";
import React, { useEffect } from "react";

interface ThemeProviderProp {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProp) => {
	const { theme, changeTheme } = useStore((state) => state);

	useEffect(() => {
		const theme = localStorage.getItem("theme") as "dark" | "light" | undefined;
		if (theme) {
			changeTheme(theme);
		} else {
			localStorage.setItem("theme", "light");
			changeTheme("light");
		}
	}, []);
	if (!theme) return null;
	return (
		<div id="main-container" className={theme}>
			{children}
		</div>
	);
};

export default ThemeProvider;
