"use client";
import HeaderHome from "@/components/organism/HeaderHome";
import ProjectCard from "@/components/organism/ProjectCard";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

interface IProjectItem {
	title: string;
	description: string;
	links: {
		name: "github" | "figma";
		href: string;
	}[];
}

const items: IProjectItem[] = [
	{
		title: "Chat App",
		description:
			"Application made with angular and and python in the backend. This application is an app that allow you chat with any person that have an account in the application",
		links: [
			{
				name: "github",
				href: "",
			},
			{
				name: "figma",
				href: "",
			},
		],
	},
	{
		title: "Chat App",
		description:
			"Application made with angular and and python in the backend. This application is an app that allow you chat with any person that have an account in the application",
		links: [
			{
				name: "github",
				href: "",
			},
			{
				name: "figma",
				href: "",
			},
		],
	},
	{
		title: "Chat App",
		description:
			"Application made with angular and and python in the backend. This application is an app that allow you chat with any person that have an account in the application",
		links: [
			{
				name: "github",
				href: "",
			},
			{
				name: "figma",
				href: "",
			},
		],
	},
];

const image =
	"https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProjectsPage = () => {
	const { t } = useTranslation();
	return (
		<div className="bg-main-bg-color">
			<HeaderHome fixed />

			<div className="flex lg:justify-center lg:items-center lg:h-screen">
				<div className="m-auto w-11/12 mt-24 lg:mt-32 lg:grid lg:gap-0 lg:m-0 lg:p-0 lg:max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1500px]">
					<h1 className="text-3xl font-bold text-secondary-color text-center lg:text-left lg:text-5xl">
						{t("projects.content.title")}
					</h1>
					<div className="grid lg:grid-cols-2 lg:gap-20">
						<Image
							className="block object-cover w-full rounded-[20px] lg:rounded-[70px] max-h-96 self-center"
							src={image}
							alt=""
							width={400}
							height={400}
						/>
						<div className="grid gap-10 mt-10">
							{items.map((item, index) => {
								return <ProjectCard item={item} key={index} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
