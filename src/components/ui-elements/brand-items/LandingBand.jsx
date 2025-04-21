import React from "react";

const LandingBrand = ({ rec, index }) => {
	return (
		<>
			{
				<div>
					<div
						key={index}
						className="px-0 bg-transparent shadow-lg flex flex-col"
					>
						<img
							src={rec.image}
							alt={rec.title}
							className="h-auto max-w-full rounded-[15px]" // Image styling
						/>
					</div>
					<div>
						<h3 className="text-center font-semibold mb-2">{rec.title}</h3>
						{rec.lines.map((line, lineIndex) => {
							if (lineIndex + 1 == rec.lines.length) {
								return (
									<p key={lineIndex} className="text-start text-gray-700">
										{line}
									</p>
								);
							} else {
								return (
									<p key={lineIndex} className="text-start text-white text-lg">
										{line}
									</p>
								);
							}
						})}
					</div>
				</div>
			}
		</>
	);
};

export default LandingBrand;
