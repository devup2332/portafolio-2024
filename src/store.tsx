import { create } from "zustand";

interface Store {
	theme: "dark" | "light";
	// eslint-disable-next-line no-unused-vars
	changeTheme: (theme: "dark" | "light") => void;
}

const useStore = create<Store>()((set) => {
	return {
		theme: "light",
		changeTheme: (theme) => set(() => ({ theme })),
	};
});

export default useStore;
