import { create } from "zustand";

interface Store {
	theme: "dark" | "light" | undefined;
	// eslint-disable-next-line no-unused-vars
	changeTheme: (theme: "dark" | "light") => void;
}

const useStore = create<Store>((set) => {
	return {
		theme: undefined,
		changeTheme: (theme) =>
			set(() => {
				const page = document.querySelector("html");
				if (page) {
					page.classList.remove("dark", "light");
					page.classList.add(theme);
					page.style.colorScheme = theme;
				}
				return { theme };
			}),
	};
});

export default useStore;
