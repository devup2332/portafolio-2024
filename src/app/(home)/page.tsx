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

const userImage = "https://avatars.githubusercontent.com/u/80072843?v=4";

const HomePage = () => {
	const { link } = useWhatsappLink();
	const { t } = useTranslation();
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
		<div>
			<HeaderHome float />
			<div className="w-9/12 m-auto max-w-md my-14 lg:my-20 lg:grid lg:grid-cols-2 lg:max-w-5xl lg:gap-0 lg:items-center 2xl:max-w-7xl 2xl:my-32 3xl:max-w-[1500px]">
				<div className="grid gap-7 lg:gap-10">
					<h1
						className="h-full text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text text-center custom-gradient lg:text-left lg:text-[82px] xl:text-[100px]"
						style={{ lineHeight: "normal" }}
					>
						{t("home.content.title")}
					</h1>
					<p className="text-center leading-8 text-main-text-color lg:text-left lg:font-semibold xl:w-9/12">
						{t("home.content.description")}
					</p>
					<MainButton className="justify-self-center lg:justify-self-start">
						{t("home.content.button")}
					</MainButton>
					<div className="flex gap-3 justify-center items-center text-main-text-color lg:justify-start">
						<p>{t("home.content.follow")}</p>
						{links.map(({ Icon, href }, index) => {
							return (
								<Link href={href} key={index} target="_black">
									<Icon className="h-6 w-6 text-main-text-color fill-current" />
								</Link>
							);
						})}
					</div>
				</div>
				<Image
					src={userImage}
					alt=""
					width={300}
					height={300}
					className="hidden lg:block object-cover w-9/12 h-[420px] rounded-[70px] custom-shadow xl:h-[500px] max-w-[450px] justify-self-end"
				/>
			</div>
		</div>
	);
};

export default HomePage;
