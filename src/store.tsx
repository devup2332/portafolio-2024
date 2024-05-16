import { create } from "zustand";

interface Store {
	theme: "dark" | "light";
	// eslint-disable-next-line no-unused-vars
	changeTheme: (theme: "dark" | "light") => void;
}

const theme = localStorage.getItem("theme") as "dark" | "light";

const useStore = create<Store>()((set) => {
	return {
		theme: theme ? theme : "light",
		changeTheme: (theme) => set(() => ({ theme })),
	};
});

export default useStore;
