import './hero.css';

import React from 'react';

export const Hero2 = () => {
	return (
		<>
			<div className="bgContainer absolute opacity-10 flex flex-col items-center overflow-x-hidden pointer-events-none">
				<span
					className="uppercase text-text -my-32 overflow-x-hidden"
					id="bgHeroInnovate"
				>
					Innovate
				</span>
				<span className="uppercase text-text -my-32" id="bgHeroDesign">
					Design
				</span>
				<span
					className="uppercase text-text -my-32 overflow-x-hidden"
					id="bgHeroDevelop"
				>
					Develop
				</span>
			</div>
			<div className="flex justify-center w-screen h-screen items-center">
				<div className="flex flex-col  gap-5">
					<div className="flex flex-start">
						<span className="uppercase text-text font-GT">
							I am
						</span>
					</div>
					<span className="uppercase text-text font-GT font-bold text-[6.5em] leading-[4.5rem]">
						GABRIEL
					</span>
					<div className="flex justify-end">
						<span className="uppercase text-text font-GT">
							A FRONT END DEVELOPER
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
