import React from "react";
import { Button } from "../ui/button";
import { clsx } from "clsx";

interface MainButtonProps {
	children: React.ReactNode;
	className?: string;
}

const MainButton = ({ children, className }: MainButtonProps) => {
	return (
		<Button
			className={clsx(
				"bg-main-text-color text-main-bg-color py-6 px-10 rounded-xl font-semibold w-fit ",
				"hover:bg-gray-200 transition-colors hover:text-black",
				className
			)}
		>
			{children}
		</Button>
	);
};

export default MainButton;
