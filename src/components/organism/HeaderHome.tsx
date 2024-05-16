"use client";
import React from "react";
import MainLogo from "../atoms/MainLogo";
import IconMenu from "../atoms/icons/IconMenu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import IconMoon from "../atoms/icons/IconMoon";
import useStore from "@/store";
import IconSun from "../atoms/icons/IconSun";
import IconUS from "../atoms/icons/IconUS";
import IconSpanish from "../atoms/icons/IconSpanish";
import clsx from "clsx";

const links = [
	{
		name: "home",
		label: "home.header.items.home",
		href: "/",
	},
	{
		name: "about",
		label: "home.header.items.about",
		href: "/about",
	},
	{
		name: "projects",
		label: "home.header.items.projects",
		href: "/projects",
	},
	{
		name: "experience",
		label: "home.header.items.experience",
		href: "/experience",
	},
];

const HeaderHome = () => {
	const { t, i18n } = useTranslation();
	const { theme, changeTheme } = useStore((state) => state);
	const pathname = usePathname();

	const setTheme = (theme: "light" | "dark") => {
		localStorage.setItem("theme", theme);
		changeTheme(theme);
	};
	return (
		<div className="py-5 absolute top-0 lef-0 w-full text-main-text-color lg:py-10">
			<div className="m-auto w-11/12 flex justify-between items-center max-w-xl lg:max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1500px]">
				<Link href="/">
					<MainLogo />
				</Link>

				<div className="flex items-center gap-10">
					<ul className="hidden lg:flex gap-10">
						{links.map((l, i) => {
							return (
								<Link
									href={l.href}
									key={i}
									className={clsx(
										"text-sm cursor-pointer relative",
										pathname === l.href ? "font-bold custom-underline" : ""
									)}
								>
									{t(l.label)}
								</Link>
							);
						})}
					</ul>
					{theme === "light" ? (
						<button onClick={() => setTheme("dark")}>
							<IconMoon className="w-5 h-5 text-main-text-color fill-current" />
						</button>
					) : (
						<button onClick={() => setTheme("light")}>
							<IconSun className="w-5 h-5 text-main-text-color stroke-current" />
						</button>
					)}
					<button
						className="text-sm"
						onClick={() => {
							i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
						}}
					>
						{i18n.language === "en" ? (
							<IconUS className="w-5 h-5" />
						) : (
							<IconSpanish className="w-5 h-5" />
						)}
					</button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="outline-none lg:hidden">
								<IconMenu className="text-main-text-color w-5 h-5 fill-current" />
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-40">
							{links.map((link) => (
								<DropdownMenuItem key={link.name}>
									<Link
										href={link.href}
										className={
											pathname === link.href
												? "font-bold w-full block"
												: "block w-full"
										}
									>
										{t(link.label)}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
};

export default HeaderHome;
