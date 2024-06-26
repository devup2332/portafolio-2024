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
	"https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProjectsPage = () => {
	const { t } = useTranslation();
	return (
		<div className="bg-main-bg-color">
			<HeaderHome float />

			<div className="m-auto grid w-9/12 max-w-md my-14 gap-10 lg:my-20 lg:grid lg:max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1500px]">
				<div className="grid gap-y-10 lg:grid-cols-2 lg:gap-20 lg:gap-y-0">
					<h1 className="text-4xl font-bold text-secondary-color text-center lg:text-left lg:text-5xl">
						{t("projects.content.title")}
					</h1>
					<Image
						className="block object-cover w-full rounded-[20px] lg:rounded-[70px] max-h-96 self-center lg:col-start-1"
						src={image}
						alt=""
						width={400}
						height={400}
					/>
					<div className="grid gap-10 mt-10 lg:col-start-2">
						{items.map((item, index) => {
							return <ProjectCard item={item} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
