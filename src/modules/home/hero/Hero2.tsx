export const Hero2 = () => {
	return (
		<>
			<div className="hero-container flex h-screen w-screen items-center justify-center">
				<div className="hero-title-container flex select-none flex-col gap-5 font-GT uppercase">
					<div className="hero-title-small flex">
						<span className="hero-title font-GT uppercase">
							I am
						</span>
					</div>
					<span className="hero-title-large leading-negative font-GT text-[6.5em] font-bold">
						Gabriel
					</span>
					<div className="hero-title-small relative flex justify-end">
						<span className="hero-title font-GT uppercase">
							A FRONT END DEVELOPER
						</span>
					</div>
				</div>
				<div className="text-background-container pointer-events-none absolute left-1/2 top-1/2 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center justify-center overflow-hidden opacity-[0.02]">
					<span className="text-background font-GT text-[20vw] font-bold uppercase leading-[75%] text-light-primary ">
						Innovate
					</span>
					<span className="text-background font-GT text-[20vw] font-bold uppercase leading-[75%] text-light-primary ">
						Design
					</span>
					<span className="text-background font-GT text-[20vw] font-bold uppercase leading-[75%] text-light-primary ">
						Develop
					</span>
				</div>
			</div>
		</>
	);
};
