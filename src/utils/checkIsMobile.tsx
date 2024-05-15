"use client";
export const checkIsMobile = () => {
	if (typeof window !== "undefined") {
		// Client-side-only code
		const toMatch = [
			/Android/i,
			/webOS/i,
			/iPhone/i,
			/iPad/i,
			/iPod/i,
			/BlackBerry/i,
			/Windows Phone/i,
		];

		return toMatch.some((toMatchItem) => {
			return window.navigator.userAgent.match(toMatchItem);
		});
	}
};
