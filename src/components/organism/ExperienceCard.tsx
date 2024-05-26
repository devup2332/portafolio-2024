import React from "react";
import IconCalendar from "../atoms/icons/IconCalendar";
import IconDot from "../atoms/icons/IconDot";

interface ExperienceCardProps {
	item: {
		bussiness: string;
		date: string;
		description: string[];
	};
}

const ExperienceCard = ({
	item: { bussiness, date, description },
}: ExperienceCardProps) => {
	return (
		<div className="p-10 bg-secondary-bg-color rounded-xl grid gap-3 hover:shadow-md transition-shadow">
			<h2 className="text-xl font-bold">{bussiness}</h2>
			<div className="flex items-center gap-3">
				<IconCalendar className="w-5 h-5 text-main-text-color fill-current" />
				<span>{date}</span>
			</div>
			<ul className="grid gap-5">
				{description.map((desc, index) => {
					return (
						<li className="flex gap-3 grid-cols-2" key={index}>
							<IconDot className="mt-2 shrink-0 h-2 w-2 text-main-text-color fill-current" />
							<p className=""> {desc}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ExperienceCard;
