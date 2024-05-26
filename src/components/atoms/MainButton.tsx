import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { clsx } from "clsx";

interface MainButtonProps extends ButtonProps {
	children: React.ReactNode;
}

const MainButton = ({ children, className, ...props }: MainButtonProps) => {
	return (
		<Button
			className={clsx(
				"bg-main-text-color text-main-bg-color py-6 px-10 rounded-xl font-semibold w-fit ",
				"hover:bg-gray-200 transition-colors hover:text-black",
				className
			)}
			{...props}
		>
			{children}
		</Button>
	);
};

export default MainButton;
