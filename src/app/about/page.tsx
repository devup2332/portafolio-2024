"use client";
import MainButton from "@/components/atoms/MainButton";
import IconGithub from "@/components/atoms/icons/IconGithub";
import IconLinkeding from "@/components/atoms/icons/IconLinkeding";
import IconWhatsapp from "@/components/atoms/icons/IconWhatsapp";
import HeaderHome from "@/components/organism/HeaderHome";
import useWhatsappLink from "@/hooks/useWhatsappLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const images = [
	{
		src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		src: "https://images.unsplash.com/photo-1599837565318-67429bde7162?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const AboutPage = () => {
	const { t } = useTranslation();
	const { link } = useWhatsappLink();
	const links = [
		{
			Icon: IconGithub,
			label: "github",
			href: "https://github.com/devup2332",
		},
		{
			Icon: IconWhatsapp,
			label: "whatsapp",
			href: link,
		},
		{
			Icon: IconLinkeding,
			label: "linkedin",
			href: "https://linkedin.com/in/drojascam",
		},
	];
	return (
		<div className="bg-main-bg-color">
			<HeaderHome fixed />

			<div className="flex lg:h-screen lg:justify-center lg:items-center">
				<div className="w-11/12 m-auto lg:h-fit mt-24 max-w-xl mb-20 lg:max-w-5xl lg:flex lg:mt-32 xl:mt-0 lg:gap-20 2xl:max-w-7xl 2xl:gap-40 3xl:max-w-[1500px]">
					<div className="grid gap-10 lg:w-6/12">
						<h1 className="text-3xl font-bold text-secondary-color text-center lg:text-left lg:text-5xl">
							{t("about.content.title")}
						</h1>
						<p className="text-main-text-color text-center leading-7 lg:text-left lg:leading-8">
							{t("about.content.description")}
						</p>
						<Image
							className="block object-cover w-full rounded-[20px] lg:h-96 lg:rounded-[70px] 2xl:h-[450px] 3xl:h-[500px]"
							src={images[0].src}
							alt=""
							width={300}
							height={300}
						/>
					</div>
					<div className="grid gap-10 mt-10 lg:w-6/12 lg:mt-0 lg:h-fit">
						<Image
							className="block object-cover w-full rounded-[20px] lg:h-96 lg:rounded-[70px] 2xl:h-[450px] 3xl:h-[500px]"
							src={images[1].src}
							alt=""
							width={300}
							height={300}
						/>
						<div className="grid justify-center gap-5 lg:justify-start">
							<p className="text-main-text-color text-center lg:text-left">
								{t("about.content.follow")}
							</p>
							<div className="flex gap-5 items-center justify-center lg:justify-start">
								{links.map(({ Icon, href }, index) => {
									return (
										<Link href={href} key={index} target="_black">
											<Icon className="h-6 w-6 text-main-text-color fill-current" />
										</Link>
									);
								})}
							</div>
							<MainButton>{t("about.content.button")}</MainButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
