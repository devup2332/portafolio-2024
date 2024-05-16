"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useWhatsappLink = () => {
	const [link, setLink] = useState("");
	const { t } = useTranslation();
	useEffect(() => {
		const toMatch = [
			/Android/i,
			/webOS/i,
			/iPhone/i,
			/iPad/i,
			/iPod/i,
			/BlackBerry/i,
			/Windows Phone/i,
		];
		const isMobile = toMatch.some((toMatchItem) => {
			return window.navigator.userAgent.match(toMatchItem);
		});
		let url = isMobile ? "https://wa.me" : "https://web.whatsapp.com/send";
		const phone = "51976469908";
		url += isMobile ? `/${phone}?` : `?phone=${phone}&`;
		url += `text=${encodeURIComponent(t("home.content.whatsappMessage"))}`;
		setLink(url);
	}, []);
	return { link };
};

export default useWhatsappLink;
