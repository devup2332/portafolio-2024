"use client";
import ExperienceCard from "@/components/organism/ExperienceCard";
import HeaderHome from "@/components/organism/HeaderHome";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const imageUrl =
	"https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const experienceItems = [
	{
		bussiness: "Lapzo",
		date: "May 2022 - Presente",
		description: [
			"Frontend development of an education app with React,Material UI, ApolloClient , Hasura, PostgreSql and GraphQL.",
			"My team was in charge of resolving different types of bugs during the application transition",
		],
	},
	{
		bussiness: "Inetum",
		date: "Sep 2021 - May 2022",
		description: [
			"Frontend development with Nextjs,React,Material UI, ApolloServer and GraphQL.",
			"In this company I fully played the role of frontend developer",
			"I have been developing multiple improvements and new features in the application",
		],
	},
	{
		bussiness: "Jabu",
		date: "Sep 2021 - May 2022",
		description: [
			"Development an application with Redux, Next, Nodejs, React, Serverless Framkework using PostgreSql (Prisma)",
			"Improved page load time by adding different hooks like useMemo and useCallback",
		],
	},
];

const ExperiencePage = () => {
	const { t } = useTranslation();
	return (
		<div>
			<HeaderHome float />

			<div className="w-9/12 m-auto my-14 grid gap-5 max-w-md lg:grid-cols-2 lg:my-20 lg:max-w-5xl lg:gap-10 xl:max-w-7xl">
				<h1 className="text-secondary-color text-4xl font-bold text-center lg:text-left lg:text-5xl">
					{t("experience.content.title")}
				</h1>
				<div className="grid gap-5 lg:col-start-1 lg:gap-10">
					{experienceItems.map((item, index) => {
						return <ExperienceCard item={item} key={index} />;
					})}
				</div>
				<Image
					className="w-full block object-cover rounded-[20px] h-[450px] lg:rounded-[70px] lg:self-center lg:justify-self-end lg:max-w-[400px]"
					src={imageUrl}
					alt=""
					width={300}
					height={300}
				/>
			</div>
		</div>
	);
};

export default ExperiencePage;
