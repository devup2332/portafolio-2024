import React, { SVGProps } from "react";

const IconMenu = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="menu"
			{...props}
		>
			<g>
				<g>
					<rect width="18" height="2" x="3" y="11" rx=".95" ry=".95"></rect>
					<rect width="18" height="2" x="3" y="16" rx=".95" ry=".95"></rect>
					<rect width="18" height="2" x="3" y="6" rx=".95" ry=".95"></rect>
				</g>
			</g>
		</svg>
	);
};

export default IconMenu;
