"use client";
import HeaderHome from "@/components/organism/HeaderHome";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
	const { t } = useTranslation();
	return (
		<div className="bg-main-bg-color">
			<HeaderHome />

			<div className="">
				<div className="w-11/12 m-auto ">
					<h1 className="text-3xl font-bold text-secondary-color">
						{t("about.content.title")}
					</h1>
					<p>{t("about.content.description")}</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
