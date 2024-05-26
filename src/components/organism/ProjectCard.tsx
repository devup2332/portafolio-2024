import React from "react";
import IconFigma from "../atoms/icons/IconFigma";
import IconGithub from "../atoms/icons/IconGithub";
import Link from "next/link";

interface ProjectCardItem {
	title: string;
	description: string;
	links: {
		name: "github" | "figma";
		href: string;
	}[];
}

interface ProjectCardProps {
	item: ProjectCardItem;
}

const ProjectCard = ({ item }: ProjectCardProps) => {
	return (
		<div className="p-10 bg-secondary-bg-color rounded-xl grid gap-7 hover:shadow-md transition-shadow">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg text-main-text-color">{item.title}</h1>
				<div className="flex gap-5 items-center ">
					{item.links.map((link, index) => {
						return (
							<Link href={link.href} key={index}>
								{link.name === "github" ? (
									<IconGithub className="h-6 w-6 text-main-text-color fill-current" />
								) : (
									<IconFigma className="h-6 w-6 text-main-text-color fill-current" />
								)}
							</Link>
						);
					})}
				</div>
			</div>
			<p className="leading-7 text-main-text-color">{item.description}</p>
		</div>
	);
};

export default ProjectCard;
