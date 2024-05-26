"use client";
import useStore from "@/store";
import React, { useEffect } from "react";
interface ThemeProviderProp {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProp) => {
	const { theme, changeTheme } = useStore((state) => state);

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			localStorage.setItem("theme", localTheme);
			document.querySelector("html")?.classList.add(localTheme);
			changeTheme(localTheme as "dark" | "light");
		} else {
			document.querySelector("html")?.classList.add("light");
			localStorage.setItem("theme", "light");
			changeTheme("light");
		}
	}, []);
	if (!theme) return null;
	return <>{children}</>;
};

export default ThemeProvider;
